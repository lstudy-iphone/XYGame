import { _decorator, Component, Node, sp } from 'cc';
import { BaseView } from '../../../../MVC/BaseView';
import { FightPlayerModel } from '../Model/FightPlayerModel';
const { ccclass, property } = _decorator;

@ccclass('FightPlayer')
export class FightPlayer extends BaseView {
    private _spine:sp.Skeleton;
    private _spineNode:Node;
    @property({override: true})
    _model:FightPlayerModel = null;
    get model(){
        return this._model;
    }
    start() {
    }

    onLoad(){
        this._spineNode = this.node.getChildByName("spine")
        this._spine = this._spineNode.getComponent(sp.Skeleton);
        this._spineNode.setScale(0.5,0.5);
    }

    init(){
        this.initSpine();
        if(!this.model.isLeft){
            this._spineNode.setScale(-0.5,0.5);
        }
    }

    private initSpine(){
        xygame.LoadManager.loadRes("lasuo",sp.SkeletonData,"Hero").then((SkeletonData)=>{
            this._spine.skeletonData = SkeletonData;
            this.stand();
        });
    }

    private stand(){
        this._spine.setAnimation(0,"gongji",true)
    }
}

