interface IKickable {
    kick(distance: number): void;
}
declare class Ball {
    kick(distance: number): void;
}
declare let kickable: IKickable;
