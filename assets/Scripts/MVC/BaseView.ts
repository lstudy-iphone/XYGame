/**
 * view 基类
 */
import { _decorator, Component, Node, Color } from 'cc';
import { BaseModel } from './BaseModel';
const { ccclass, property } = _decorator;

@ccclass('BaseView')
export class BaseView extends Component {

    @property({
        visible:true,
        displayName:"是否遮挡点击"
    })
    haveTouch:boolean = false;

    @property({
        visible:true,
        displayName:"是否有黑色蒙版"
    })
    haveMask:boolean = false;

    @property({
        visible:true,
        displayName:"蒙版颜色"
    })
    maskColor:Color = new Color(0, 0, 0, 255);

    @property({
     visible:true,
     displayName:"蒙版透明度"
    })
    maskOpacity:number = 150;

    @property
    _model:BaseModel = null;
    get model(){
        return this._model;
    }
    set model(value){
        this._model = value;
    }

    onLoad(){

    }

    addTo(parent:Node){
        this.node.parent = parent;
    }

    removeSelf() {
        if (this._model != null) {
            this._model.targetOff(this);
        }
        if (this.node) {
            this.node.destroy();
        }
    }

    observe(model) {
        this._model = model;
    }

    on(type, callback) {
        this._model.on(type, callback, this)
    }
}

