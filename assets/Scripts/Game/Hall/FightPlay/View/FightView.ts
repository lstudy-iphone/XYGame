import { _decorator, Component, Node, Vec3, Prefab, instantiate } from 'cc';
import { FightPlayerModel } from '../Model/FightPlayerModel';
import { FightPlayer } from './FightPlayer';
const { ccclass, property } = _decorator;

@ccclass('FightView')
export class FightView extends Component {
    campPoints:Array<Vec3>;
    beCampPoints:Array<Vec3>;
    camp:Map<number,FightPlayer>;
    beCamp:Map<number,FightPlayer>;
    start() {
        console.log(this.node.getPosition());
    }

    onLoad(){
        this.campPoints = [
            new Vec3(-118,64,0),
            new Vec3(-118,-44,0),
            new Vec3(-242,107,0),
            new Vec3(-242,0,0),
            new Vec3(-242,-107,0),
        ];
        this.beCampPoints = [
            new Vec3(118,64,0),
            new Vec3(118,-44,0),
            new Vec3(242,107,0),
            new Vec3(242,0,0),
            new Vec3(242,-107,0),
        ];
        this.camp = new Map();
        this.beCamp = new Map();
    }

    initPlayers(){
        for (let index = 0; index < this.campPoints.length; index++) {
            const pos = this.campPoints[index];
            xygame.LoadManager.loadRes("View/FightPlayer",Prefab, "Hall").then((prefab)=>{
                let node:Node = instantiate(prefab);
                node.parent = this.node;
                node.position = pos;
                let player = node.getComponent(FightPlayer);
                this.camp[index] = player;
                let model = new FightPlayerModel();
                model.initData(true);
                player.observe(model);
                player.init();
            });
        }

        for (let index = 0; index < this.beCampPoints.length; index++) {
            const pos = this.beCampPoints[index];
            xygame.LoadManager.loadRes("View/FightPlayer",Prefab, "Hall").then((prefab)=>{
                let node:Node = instantiate(prefab);
                node.parent = this.node;
                node.position = pos;
                let player = node.getComponent(FightPlayer);
                this.beCamp[index] = player;
                let model = new FightPlayerModel();
                model.initData(false);
                player.observe(model);
                player.init();
            });
        }
    }

    getPlayer(grid){
        if(this.camp[grid]){
            return this.camp[grid]
        }

        if(this.beCamp[grid]){
            return this.beCamp[grid]
        }
    }
}

