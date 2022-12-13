import NetConfig from "./NetConfig"
import Proto from '../Proto.js/proto.js';
import Protobuf from './Protobuf';
import { Buffer } from "buffer";
export class S_WebSocket{
    ws:WebSocket;
    _connectCallBack:Function = null;
    _disconnectCallBack:Function = null;
    _gameHandlers:Object = null;
    _seq_id:0;
    constructor(){
        this._gameHandlers = {};
        this._seq_id = 0;
    }
    /**
     * 连接
     */
    connect(){
        this.ws = new WebSocket("ws://" + NetConfig["ip"] + ":" + NetConfig["port"] + "/websocket");
        this.ws.onopen = () => {
            this.ws.binaryType = "arraybuffer";
            if (this._connectCallBack) {
                this._connectCallBack();
            }
        };
        this.ws.onmessage = function(evt) {
            let data = this.handleData(evt.data);
            if (data) {
                this.handleMessage(data.msgId, data.message);
            }
        }.bind(this);
        this.ws.onclose = (evt)=> {
            if (this._disconnectCallBack) {
                this._disconnectCallBack();
            }
        };
        this.ws.onerror = function(evt) {
            console.log("“WebSocketError");
        };
    }

     /**
      * 消息解析
      * @param data 数据
      * @returns 
      */
     handleData(data) {
        let buff = new Buffer(data);
        if (buff.length <= 0) {
            return;
        }
        let cc = Proto.common.GeneralStreamMessage;
        let message = Protobuf.decode(cc,buff);
        let msgId = message.command;
        let msgData = message.msgData;
        let model = null;
        if (!model) {
            model = Proto.game[msgId];
        }
        if (!model) {
            console.error(`[WS] handleData Invalid Game Command: ${msgId}`);
            return;
        }
        let endmessage = Protobuf.decode(model, msgData);
        console.log("handle-msgId:",msgId);
        return { message: endmessage, msgId: msgId };
    }

    handleMessage(msgId, message) {
        for (let k in this._gameHandlers) {
            if (this._gameHandlers[k] && this._gameHandlers[k](msgId, message)) {
                return;
            }
        }
    }

    /**
     * 消息发送
     * @param command 消息命令
     * @param params 数据
     * @returns 
     */
    send(command, params = null) {
        console.log("send-msgId:",command);
        let model = null;
        if (!model) {
            model = Proto.game[command];
        }
        if (!model) {
            console.error(`[WS] send Invalid Game Command: ${command}`);
            return;
        }
        this._seq_id += 1;
        let bytes = Protobuf.encode(model, params);
        let sendParams = {
            command : command,
            seqId : this._seq_id,
            msgData : bytes
        }
        let cc = Proto.common.GeneralStreamMessage;
        let payload = Protobuf.encode(cc, sendParams);
        let msgbuf = new Buffer(payload);
        // let msgbufLenth = msgbuf.length;
        // let totalLength = 4 + msgbufLenth;
        // let buff = new Buffer(totalLength);
        // buff.writeUInt32LE(msgbufLenth);
        // msgbuf.copy(buff, 4, 0, msgbufLenth);
        this.ws.send(msgbuf);
    }

    /**
     * 关闭连接
     */
    close() {
        this._seq_id = 0;
        if (this.ws) {
            this.ws.onopen = () => { };
            this.ws.onmessage = () => { };
            this.ws.onclose = () => { };
            this.ws.onerror = () => { };
            this.ws.close();
            this.ws = null;
       }
    }

    registerHandler(key:string, handler) {
        this._gameHandlers[key] = handler;
    }

    unRegisterHandler(key:string) {
        delete this._gameHandlers[key];
    }
}

