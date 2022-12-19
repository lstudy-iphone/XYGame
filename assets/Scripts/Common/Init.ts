import {} from "./EngineModify"
import { EventManager } from "../Manager/EventManager";
import { LoadResManager } from "../Manager/LoadResManager";
window.xygame = window.xygame || { 
    EveManger: new EventManager(),
    LoadManager: new LoadResManager,
};
export {};