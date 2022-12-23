import "./EngineModify"
import { EventManager } from "../Manager/EventManager";
import { LoadResManager } from "../Manager/LoadResManager";
window.xygame = window.xygame || { 
    EventManger: new EventManager(),
    LoadManager: new LoadResManager,
};
export {};