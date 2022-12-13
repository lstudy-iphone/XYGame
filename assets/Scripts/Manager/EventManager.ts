/**
 * 全局事件管理类
 */
import {EventTarget} from 'cc';
export class EventManager {
    IEventDispatcher:EventTarget
    constructor(){
        this.IEventDispatcher = new EventTarget();
    }
    
    /**
     * 监听事件
     * @param {string} type
     * @param {*} callback
     * @param {*} target
     */
     on(type, callback, target) {
        this.IEventDispatcher.on(type, callback, target);
    }

    /**
     * 监听事件（仅一次）
     * @param {*} type
     * @param {*} callback
     * @param {*} target
     */
    once(type, callback, target) {
        this.IEventDispatcher.once(type, callback, target);
    }

    /**
     * 发送事件
     * @param {string} type
     * @param {*} params
     */
    emit(type, params = null) {
        this.IEventDispatcher.emit(type, params);
    }

    /**
     * 清除监听，会清除type类型的所有监听
     * @param {string} type
     */
    off(type, callback, target) {
        this.IEventDispatcher.off(type, callback, target);
    }
    /**
     * 清除对象所有事件监听
     * @param {*} target 
     */
    targetOff(target) {
        this.IEventDispatcher.targetOff(target);
    }
}



