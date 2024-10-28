class State {
    constructor() {
        this.list = [];
    }
    emit(event) {
        this.list.push(event);
    }
    getAll() {
        return this.list;
    }
}
const s = new State();
s.emit({ code: 200 });
s.getAll().forEach(event => console.log(event.code));
const s2 = new State();
s2.emit({ code: { message: 'OK', status: 200 } });
s2.getAll().map(event => event.code).forEach(event => {
    console.log(event.status);
    console.log(event.message);
});
