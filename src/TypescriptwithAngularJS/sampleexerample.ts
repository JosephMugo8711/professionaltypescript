// // Define the directive factory function 'myDirective'
// // It accepts $location (AngularJS's location service) as an argument and returns a directive configuration.
// export function myDirective($location: ng.ILocationService): ng.IDirective {
//     return {
//         // The link function is responsible for manipulating the DOM when the directive is applied.
//         link: (
//             scope: ng.IScope,               // Scope for two-way data binding
//             element: ng.IAugmentedJQuery,    // The DOM element to which the directive is applied
//             attributes: ng.IAttributes       // Attributes on the element that the directive has access to
//         ): void => {
//             // Set the text content of the element to display the current URL from $location service
//             element.text("Current URL: " + $location.url());
//         },

//         // Replaces the original element with the template specified in templateUrl.
//         replace: true,

//         // Specifies that this directive requires an ngModel to be present on the element.
//         require: "ngModel",

//         // Restricts the directive's usage to be applied only as an attribute.
//         restrict: "A",

//         // The URL for the directive's template, injected via templatesUrl (assuming templatesUrl is defined).
//         templateUrl: templatesUrl.myDirective, // 'myDirective' is assumed to be a key in the templatesUrl object.
//     };
// }

// // Use a standardized naming convention (slug) for the directive across the project
// // This simplifies the process of renaming or reusing the directive in the future.
// myDirective.prototype.slug = "myDirective";

// // Register the directive with the AngularJS application module.
// // The directive is assigned to the module 'myApp' with the name defined by myDirective.prototype.slug.
// // The directive's dependencies are injected into the module configuration.
// angular.module("myApp")
//     .directive(myDirective.prototype.slug, [
//         Templates.prototype.slug,   // Injecting a template dependency for the directive (assumes Templates is defined elsewhere)
//         myDirective                 // The directive factory function itself
//     ]);
