Promise.prototype.polyfillFinally = function (onFinally) {
    if (onFinally) {
        return this.then(val => {
            onFinally();
            return val;
        }, err => {
            onFinally();
            throw err;
        });
    }
    return this;
}
export {};



