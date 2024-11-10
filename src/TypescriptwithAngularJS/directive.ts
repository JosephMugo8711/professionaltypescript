// import { replace } from "lodash";
// import * as angular from "angular";

// // Define ITemplates interface for template URL configuration
// interface ITemplates {
//     templateUrl: string;
// }

// // Interface for methods and properties exposed by the directive controller
// interface IMyDirectiveController {
//     getUrl(): string;
// }

// class MyDirectiveController implements IMyDirectiveController {
//     public static $inject = ["$location", "toaster"];

//     constructor(private $location: angular.ILocationService, private toaster: any) {}

//     public getUrl(): string {
//         return this.$location.url();
//     }
// }

// /*
// * Directive factory function
// * Receives templates as an ITemplates object
// */
// export function myDirective(templates: ITemplates): angular.IDirective {
//     return {
//         controller: MyDirectiveController,
//         controllerAs: "vm",
//         link: (
//             scope: angular.IScope,
//             element: angular.IAugmentedJQuery,
//             attributes: angular.IAttributes,
//             controller: IMyDirectiveController
//         ): void => {
//             let url = controller.getUrl();
//             element.text("Current URL: " + url);
//         },
//         replace: true,
//         require: "ngModel",
//         restrict: "A",
//         templateUrl: templates.templateUrl,  // Uses the URL from the templates argument
//     };
// }

// // Inject dependencies for the directive
// myDirective.$inject = [Templates.prototype.slug];

// myDirective.prototype.slug = "myDirective";

// angular.module("myApp")
//     .directive(myDirective.prototype.slug, myDirective);
