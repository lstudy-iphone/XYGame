/**
 * view model基类
 */
import { _decorator, Component, EventTarget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseModel')
export class BaseModel extends Component {
    @property
    _eventDispatcher:EventTarget = null;
    get eventDispatcher(){
        return this._eventDispatcher;
    }
    
    ctor(){
        this._eventDispatcher = new EventTarget();
    }

    /**
     * 监听事件
     * @param {string} type
     * @param {*} callback
     * @param {*} target
     */
     on(type, callback, target) {
        this._eventDispatcher.on(type, callback, target);
    }

    /**
     * 发送事件
     * @param {string} type
     * @param {*} params
     */
    emit(type, params = null) {
        this._eventDispatcher.emit(type, params);
    }

    /**
     * 清除对象所有事件监听
     * @param {*} target 
     */
    targetOff(target) {
        this._eventDispatcher.targetOff(target);
    }
}

