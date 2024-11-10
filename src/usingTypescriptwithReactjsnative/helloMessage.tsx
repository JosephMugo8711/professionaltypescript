// Import the necessary modules from the React library
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional React component called HelloMessage
// This component takes 'name' as a prop and displays a greeting
//const HelloMessage = ({ name }) => <div>Hello {name}</div>;

// Render the HelloMessage component into the 'mountNode' element in the HTML file
// Pass the 'name' prop with a value of "John" to display "Hello John"
//ReactDOM.render(<HelloMessage name="John" />, document.getElementById("mountNode"));


// To fully utilize TypeScript's main feature (static type checking), 
// we need to use modern ES6+ syntax and structure our code accordingly.

// Step 1: Convert React.createClass to an ES6 class component

// Define a React component named HelloMessage1 as an ES6 class
// Extend React.Component to inherit the properties and methods necessary for a React componentimport React from 'react';

// Define an interface to specify the type for the component's props
// Define the Props interface, which includes a required 'name' prop of type string
// and an optional 'optionalParam' of type number (if provided)
interface Props {
  name: string; // Required prop
  optionalParam?: number; // Optional prop, can be undefined or a number
}

// Define the State interface, which is empty in this case
interface State {
  // No state properties in this component, so the interface is empty
}

class HelloMessage1 extends React.Component<Props, State> {
  render() {
    // Render JSX, using this.props.name to display a greeting message
    return <div>Hello {this.props.name}</div>;
  }
}

// Render the HelloMessage component into the 'mountNode' div with the 'name' prop
// TypeScript will allow this as the 'name' is required and valid
ReactDOM.render(<HelloMessage1 name="Sebastian" />, document.getElementById("mountNode")!);

// However, if you pass 'optionalParam' with a wrong type, TypeScript will show an error
// Since 'optionalParam' is expected to be a number, passing a string will cause a type error
// This will cause an error:
// ReactDOM.render(<HelloMessage name="Sebastian" optionalParam="foo" />, document.getElementById("mountNode"));


//Now TypeScript will display an error if the programmer forgets to pass props. Or if trying to pass in props that are
//not deﬁned in the interface.
