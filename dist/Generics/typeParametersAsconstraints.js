function assign(target, source) {
    for (let id in source) {
        if (Object.prototype.hasOwnProperty.call(source, id)) {
            target[id] = source[id];
        }
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
assign(x, { b: 10, d: 20 });
