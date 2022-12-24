import { _decorator, Component, Node } from 'cc';
import { FightView } from '../View/FightView';
const { ccclass, property } = _decorator;

@ccclass('FightShowController')
export class FightPlayController extends Component {
    _view:FightView;
    start() {
        this._view = this.node.getComponent(FightView);
        this._view.initPlayers();
        
    }

    getPlayer(grid){
        return this._view.getPlayer(grid);
    }

    onFightAction(){

    }

    playFightAction(){

    }
}

