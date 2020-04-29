function shallowCopy(x) {
    if(Array.isArray(x)) {
        return x.concat()
    }else if(x && typeof x === 'object') {
        return Object.assign(new x.constructor(), x);
    }else {
        return x;
    }
}
