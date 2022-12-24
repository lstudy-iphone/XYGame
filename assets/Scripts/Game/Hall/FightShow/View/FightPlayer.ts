import { _decorator, Component, Node, sp } from 'cc';
import { BaseView } from '../../../../MVC/BaseView';
import { FightPlayerModel } from '../Model/FightPlayerModel';
const { ccclass, property } = _decorator;

@ccclass('FightPlayer')
export class FightPlayer extends BaseView {
    spine:sp.Skeleton;
    spineNode:Node;
    @property({override: true})
    _model:FightPlayerModel = null;
    get model(){
        return this._model;
    }
    start() {
    }

    onLoad(){
        this.spineNode = this.node.getChildByName("spine")
        this.spine = this.spineNode.getComponent(sp.Skeleton);
        this.spineNode.setScale(0.5,0.5);
    }

    init(){
        this.initSpine();
        if(!this.model.isLeft){
            this.spineNode.setScale(-0.5,0.5);
        }
    }

    initSpine(){
        xygame.LoadManager.loadRes("lasuo",sp.SkeletonData,"Hero").then((SkeletonData)=>{
            this.spine.skeletonData = SkeletonData;
            this.stand();
        });
    }

    stand(){
        this.spine.setAnimation(0,"gongji",true)
    }
}

