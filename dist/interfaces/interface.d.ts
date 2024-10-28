interface Connector {
    doConnect(): boolean;
}
export declare class WifiConnector implements Connector {
    doConnect(): boolean;
}
export declare class System {
    private connector;
    constructor(connector: Connector);
}
export declare class BluetoothConnector implements Connector {
    doConnect(): boolean;
}
export {};
