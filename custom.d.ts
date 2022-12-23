

interface EventManger {
   on(type, callback, target);
   once(type, callback, target);
   emit(type, params);
   off(type, callback, target);
   targetOff(target);
}

interface LoadResManager{
    /**
     * 加载bundle
     */
   loadBundle(bundleName:string):Promise<any>;
   /**
     * @param path 加载资源
     * @param resType 类型
     * @param bundleOrName bundle名
     * @returns 
     */
   loadRes(path, resType, bundleOrName):Promise<any>;
    /**
     * 移除bunle
     */
   removeBundle(bundleName):void;
   /**
     * 加载Resource下资源
     * @param path  路径
     * @param resType 类型
     * @returns 
     */
   loadResource(path, resType):Promise<any>;
   /**
     * 释放Resource下资源
     * @param path 
     */
   releaseResource(path):void;
   /**
     * 移除bundle下资源
     * @param path 
     * @param bundleOrName 
     */
   releaseBundleResource(path, bundleOrName):void;
}

type XYGame = {
  EventManger:EventManger;
  LoadManager:LoadResManager;
}
interface Window {
   xygame:XYGame;
}
declare var xygame:XYGame;

interface Promise<T>{
   polyfillFinally(onFinally: Function): Promise<any>;
}


