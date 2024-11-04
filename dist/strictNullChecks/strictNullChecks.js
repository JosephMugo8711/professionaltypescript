function getId(x) {
    return x.id;
}
getId(null);
function getId1(x) {
    return x.id;
}
getId1(null);
function getId2(x) {
    return x.id;
}
getId2(null);
function getId3(x) {
    if (x) {
        return x.id;
    }
    else {
        return null;
    }
}
const id = getId3(null);
getId3(null);
