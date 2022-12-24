import { _decorator, Component, Node, Vec3, Prefab, instantiate } from 'cc';
import { FightPlayerModel } from '../Model/FightPlayerModel';
import { FightPlayer } from './FightPlayer';
const { ccclass, property } = _decorator;

@ccclass('FightView')
export class FightView extends Component {
    private _campPoints:Array<Vec3>;
    private _beCampPoints:Array<Vec3>;
    private _camp:Map<number,FightPlayer>;
    private _beCamp:Map<number,FightPlayer>;
    start() {
    }

    onLoad(){
        this._campPoints = [
            new Vec3(-118,64,0),
            new Vec3(-118,-44,0),
            new Vec3(-242,107,0),
            new Vec3(-242,0,0),
            new Vec3(-242,-107,0),
        ];
        this._beCampPoints = [
            new Vec3(118,64,0),
            new Vec3(118,-44,0),
            new Vec3(242,107,0),
            new Vec3(242,0,0),
            new Vec3(242,-107,0),
        ];
        this._camp = new Map();
        this._beCamp = new Map();
    }

    initPlayers(){
        for (let index = 0; index < this._campPoints.length; index++) {
            const pos = this._campPoints[index];
            xygame.LoadManager.loadRes("View/FightPlayer",Prefab, "Hall").then((prefab)=>{
                let node:Node = instantiate(prefab);
                node.parent = this.node;
                node.position = pos;
                let player = node.getComponent(FightPlayer);
                this._camp[index] = player;
                let model = new FightPlayerModel();
                model.initData(true);
                player.observe(model);
                player.init();
            });
        }

        for (let index = 0; index < this._beCampPoints.length; index++) {
            const pos = this._beCampPoints[index];
            xygame.LoadManager.loadRes("View/FightPlayer",Prefab, "Hall").then((prefab)=>{
                let node:Node = instantiate(prefab);
                node.parent = this.node;
                node.position = pos;
                let player = node.getComponent(FightPlayer);
                this._beCamp[index] = player;
                let model = new FightPlayerModel();
                model.initData(false);
                player.observe(model);
                player.init();
            });
        }
    }

    public getPlayer(grid){
        if(this._camp[grid]){
            return this._camp[grid]
        }

        if(this._beCamp[grid]){
            return this._beCamp[grid]
        }
    }
}

