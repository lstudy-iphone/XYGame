import { _decorator, Component, Node } from 'cc';
import { FightView } from '../View/FightView';
const { ccclass, property } = _decorator;

@ccclass('FightShowController')
export class FightPlayController extends Component {
    view:FightView;
    start() {
        this.view = this.node.getComponent(FightView);
        this.view.initPlayers();
        
    }

    getPlayer(grid){
        return this.view.getPlayer(grid);
    }

    onFightAction(){

    }

    playFightAction(){

    }
}

