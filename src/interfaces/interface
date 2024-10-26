// Primary reason to use interafce to achieve polymorphism and provide developers to implement on their own way in future by implementing interfaces methods


interface Connector {
    doConnect(): boolean;
}

// connector interface, implement that for wifi communication

export class WifiConnector implements Connector {


    // Developing our concrete class named WifiConnector that has its own implementation. 
    // This is now type Connector
    public doConnect(): boolean {
        console.log("Connecting to wifi");
        console.log("Get Password");
        console.log("Lease an IP for 24 hours");
        console.log("Connected");
        return true;
    }

}

// Now we are creating our System that has a component Connector. 
// This is called dependency injection

export class System {
    // this line below is very important
    // Connector is an interface and must have doConnect()
    constructor(private connector: Connector){ 
        connector.doConnect()

    }
    // As connector is an interface this class System has much more flexibilty
    // We can pass any type which has implemented Connector interface 
    // In future developer achieves more flexibilty
    // Example
    // Below  i want to add Bluetooth Connection module
}

export class BluetoothConnector implements Connector {
    public doConnect(): boolean {
        console.log('Connecting via Bluetooth');
        console.log("Pair with PIN");
        console.log("Connected");
        return true
    }
}
// Explanation
// See that Wifi and Bluetooth have its own implementation
// Their own different way to connect
// However, hence both have implemented Type Connector the are now Type Connector.
// So that we can pass any of those to System class as the constructor parameter
// This is called polmorphism
// This class System is now not aware of whether it is Bluetooth/ Wifi even we can add another Communication module like Infrared, Bluetooth5 and whatsover by just implementing Connector interface
// This is called Duck typing (https://en.wikipedia.org/wiki/Duck_typing)
// Connector type is now dynamic as doConnect() is just a placeholder and developer implement this as his/her own

// If at constructor(private connctor: WifiConnector) where WifiConnector is a concrete class what will happen?
// Then System class will tightly couple only with WifiConnector nothing else
// Here interface solved our problem by polymorphism

