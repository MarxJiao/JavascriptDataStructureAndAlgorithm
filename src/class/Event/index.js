/**
 * @file 自定义事件类
 * @author Marx
 */

export default class {
    constructor() {
        this._events = {};
    }

    on(name, fn) {
        if (this._events[name]) {
            this._events[name].push(fn);
        }
        else {
            this._events[name] = [fn];
        }
    }

    off(name, fn) {
        if (name) {
            if (fn) {
                if (this._events[name]) {
                    for(let i = 0, l = this._events[name].length; i < l; i++) {
                        if (this._events[name][i] === fn || this._events[name][i].fn === fn) {
                            this._events[name].splice(i, 1);
                        }
                    }
                }
            }
            else {
                this._events[name] = null;
            }
        }
        else {
            this._events = {};
        }
    }

    emmit(name, payload) {
        if (this._events[name]) {
            for (let fn of this._events[name]) {
                if (typeof fn === 'function') {
                    fn(payload);
                }
            }
        }
    }

    once(name, fn) {
        const oncefn = (payload) => {
            this.off(name, fn);
            fn && fn(payload);
        }
        oncefn.fn = fn
        this.on(name, oncefn);
    }
}
