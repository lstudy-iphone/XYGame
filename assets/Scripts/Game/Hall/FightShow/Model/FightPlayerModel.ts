import { _decorator, Component, Node } from 'cc';
import { BaseModel } from '../../../../MVC/BaseModel';
const { ccclass, property } = _decorator;

@ccclass('FightPlayerModel')
export class FightPlayerModel extends BaseModel {
    isLeft:boolean;
    initData(isLeft){
        this.isLeft = isLeft;
    }
}

