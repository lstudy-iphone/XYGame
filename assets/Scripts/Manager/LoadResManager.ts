/**
 * 资源加载处理类
 */
import { assetManager,resources} from "cc"
import promisify from "./Promisify"
export class LoadResManager{
    loadBundlePromisify:Function;
    bundleLoaders:Object;
    constructor(){
        this.loadBundlePromisify = promisify(assetManager.loadBundle.bind(assetManager))
        this.bundleLoaders = {};
    }
    
    getBundle(bundleName:string) {
        return assetManager.getBundle(bundleName);
    }

    /**
     * 加载bundle
     * @param bundleName 
     * @returns 
     */
    loadBundle(bundleName:string) {
        const bundle = this.getBundle(bundleName);
        if (bundle) {
            return Promise.resolve(bundle);
        }
        if (this.bundleLoaders[bundleName]) {
            return this.bundleLoaders[bundleName];
        }
        this.bundleLoaders[bundleName] = this.loadBundlePromisify(bundleName).then(bundle => {
            console.log(`loadBundle ${bundle.name} Loaded!`);
            return bundle;
        }).polyfillFinally(()=>{
            delete this.bundleLoaders[bundleName];
        })
        return this.bundleLoaders[bundleName];
    }

    /**
     * 移除bunle
     * @param bundle 
     * @returns 
     */
    removeBundle(bundle) {
        let bundleName = null;
        if (typeof bundle === "string") {
            bundleName = bundle;
            bundle = this.getBundle(bundleName);
        } else if (bundle) {
            bundleName = bundle.name;
        }
        if (!bundle) {
            return;
        }
        bundle.releaseAll()
        assetManager.removeBundle(bundle);
    }

    /**
     * 
     * @param path 加载资源
     * @param resType 类型
     * @param bundleOrName bundle名
     * @returns 
     */
    loadRes(path, resType, bundleOrName) {
        if (!bundleOrName) {
            return Promise.reject("[ResLoader] loadResource: no Bundle assigned");
        }
        if (typeof bundleOrName === "string") {
            return this.loadBundle(bundleOrName).then(bundle => {
                return this._loadBundleResource(bundle, path, resType);
            });
        } else {
            return this._loadBundleResource(bundleOrName, path, resType);
        }
    }

    /**
     * 加载Resource下资源
     * @param path 
     * @param resType 
     * @returns 
     */
     loadResource(path, resType){
        return new Promise((resolve, reject) => {
            resources.load(path, resType, (err, prefab) => {
                if (err) {
                    return reject(err);
                }
                resolve(prefab);
            });
        });
    }
    /**
     * 释放Resource下资源
     * @param path 
     */
    releaseResource(path){
        resources.release(path);
    }

    /**
     * 移除bundle资源
     * @param path 
     * @param bundleOrName 
     */
    releaseBundleResource(path, bundleOrName) {
        let bundle = bundleOrName;
        if (typeof bundleOrName === "string") {
            bundle = this.getBundle(bundleOrName);
        }
        if (bundle) {
            console.log(`[ResLoader]:releaseResource `, path, " ", bundle.name);
            bundle.release(path);
        } else {
            console.log(`[ResLoader] releaseResource: ${path} no Bundle assigned`);
        }
    }

    _loadBundleResource(bundle, path, resType) {
        return new Promise((resolve, reject) => {
            bundle.load(path, resType, (err, res) => {
                if (err || !res) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

   
 }


