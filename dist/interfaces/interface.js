"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BluetoothConnector = exports.System = exports.WifiConnector = void 0;
class WifiConnector {
    doConnect() {
        console.log("Connecting to wifi");
        console.log("Get Password");
        console.log("Lease an IP for 24 hours");
        console.log("Connected");
        return true;
    }
}
exports.WifiConnector = WifiConnector;
class System {
    constructor(connector) {
        this.connector = connector;
        connector.doConnect();
    }
}
exports.System = System;
class BluetoothConnector {
    doConnect() {
        console.log('Connecting via Bluetooth');
        console.log("Pair with PIN");
        console.log("Connected");
        return true;
    }
}
exports.BluetoothConnector = BluetoothConnector;
