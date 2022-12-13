import machine from 'javascript-state-machine'
export class StateMachine {
    _fsm:machine;
    constructor(){

    }

    init(){
        this._fsm = new machine({
            init: 'stand',
            transitions:  [
                { name: 'start', from: 'stand',   to: 'walk'}, //开始游戏
            ],
            methods: this.getCallBackMethods(),
        });
        this._fsm.start();
    }

    getCallBackMethods() {
        let methods = {
            onEnterWalk: (lifecycle) => {
                console.log('行走状态 Enter === ')
            },

            onEnterDeath: () => {
                // console.log('死亡状态 Enter === ');
            },

            onAfterStart: (lifecycle) => {
                // console.log('开始行为 Enter === args == ', lifecycle)
            }
        }
        return methods;
    }
    
}


