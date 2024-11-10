// // Importing necessary types from AngularJS
// import IController = angular.IController;  // AngularJS IController interface for defining controllers
// import { MyModuleService } from "../services/MyModuleService";  // Importing the service to be injected into the controller

// // Defining the MyModuleController class, which implements the IController interface
// export class MyModuleController implements IController {

//   // Static property for AngularJS dependency injection (DI)
//   // $inject specifies the services that need to be injected into the controller
//   public static readonly $inject: string[] = ["$element", "myModuleService"];

//   // Define a property 'someContent' with a default value of 'Hello World'
//   public someContent: string = "Hello World";

//   // Constructor for the controller, where dependencies are automatically injected by AngularJS
//   constructor(
//     $element: JQuery,  // The '$element' injected from AngularJS represents the DOM element associated with the controller
//     private myModuleService: MyModuleService  // Injecting the 'myModuleService' instance
//   ) {
//     // Log the '$element' to the console for debugging
//     console.log("element", $element);
//   }

//   // A method to perform some action. This is where you can define the logic for the controller.
//   public doSomething(): void {
//     // Example implementation can be added here..
//   }
// }
