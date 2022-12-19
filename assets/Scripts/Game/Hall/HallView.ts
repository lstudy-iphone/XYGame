import { _decorator, Component, Node,instantiate,Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HallView')
export class HallView extends Component {
    start() {

    }

    onLoad(){
        this.initFightView();
    }

    update(deltaTime: number) {
        
    }

    initFightView(){
        xygame.LoadManager.loadRes("View/FightView", Prefab,"Hall").then((prefab)=>{
            let fightView:Node = instantiate(prefab);
            fightView.parent = this.node;
        });
    }
}

