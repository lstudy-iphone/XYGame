
interface EventManger {
   on(type, callback, target);
   once(type, callback, target);
   emit(type, params);
   off(type, callback, target);
   targetOff(target);
}
type XYGame = {
  EveManger:EventManger;
}
interface Window {
   xygame:XYGame;
}
declare var xygame:XYGame;

interface Promise<T>{
   polyfillFinally(onFinally: Function): Promise<any>;
}


