function whatTime(hour, minute) {
    return hour.toString() + ':' + minute.toString();
}
console.log(whatTime(1, 30));
console.log(whatTime('1', 30));
console.log(whatTime(1, '30'));
console.log(whatTime('1', '30'));
function addTen(start) {
    if (typeof start === 'string') {
        return parseInt(start) + 10;
    }
    else {
        return start + 10;
    }
}
console.log(addTen(20));
console.log(addTen('20'));
