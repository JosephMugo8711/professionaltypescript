declare class Car3 {
    position: number;
    private _speed;
    private _MAX_SPEED;
    move(): void;
    get speed(): number;
    set speed(value: number);
}
declare let car1: Car3;
