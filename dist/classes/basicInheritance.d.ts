declare class Tesla {
    position: number;
    protected speed: number;
    move(): void;
}
declare class SelfDrivingCar extends Tesla {
    move(): void;
}
