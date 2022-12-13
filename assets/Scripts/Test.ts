import { _decorator, Component, Node, Sprite, Material, assetManager, Prefab, instantiate, UITransform } from 'cc';
const { ccclass, property } = _decorator;
import { LoadResManager } from './Manager/LoadResManager';
import {StateMachine} from './MVC/StateMachineTest';
@ccclass('Test')
export class Test extends Component {
    @property({
        type: Number,
        visible:true
    })
    _timeIndex:0;
    _spr:Sprite;
    start() {
        let loadManamger = new LoadResManager();
        loadManamger.loadBundle("Hall").then((bundle)=>{
            if(bundle){
                console.log("bundle -success");
                console.log(bundle);
                bundle.load("prefab",Prefab,(err,prefab:Prefab)=>{
                    if(err){
                        console.log("Prefab -err");
                        return;
                    }
                    console.log("Prefab -suc");
                    let spr:Node = instantiate(prefab);
                    this.node.addChild(spr);
                })
            }
            
        });

        let machine = new StateMachine();
        machine.init();
        xygame.EveManger.on("Test",()=>{
            console.log("Event test");
        },this)

        xygame.EveManger.emit("Test",null);
    }

    onLoad(){

    }

    update(deltaTime: number) {
        if(this._timeIndex > 2){
            this._timeIndex = 0;
        }
        // this._material.setProperty("u_time",this._timeIndex);
        // this._timeIndex += deltaTime * this._speed;

    }
}

