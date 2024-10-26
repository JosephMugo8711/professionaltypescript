String.prototype.toCamelCase = function () {
    return this.replace(/[^a-z ]/ig, '')
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        return +match === 0 ? "" : match[index === 0 ? 'toLowerCase' : 'toUpperCase']();
    });
};
"This is an example".toCamelCase();
