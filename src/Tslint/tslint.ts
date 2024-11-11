// This package has been deprecated
// TSLint has been deprecated in favor of ESLint. Please see https://github.com/palantir/tslint/issues/4534 for more information.



// Assuring code quality and consistency
// TSLint performs static analysis of code and detect errors and potential problems in code
// Configuring for fewer programming errors 
// The tslint.json example contains a set configuration to enforce more typings, catch common errors or otherwise
// confusing constructs that are prone to producing bugs and following more the 

// installation and setup

// To install tslint run command
// npm install -g tslint


// Tslint is configured via file tslint.json. To initialize deafult configuration run command
// tslint --init

// To check file for possible errors in the file run command
// sets of TSLint Rules

// https://github.com/palantir/tslint
// https://github.com/buzinas/tslint-eslint-rules
// https://github.com/mgechev/codelyzer

// Yeoman generator supports all these presets and can be extends also:

// https://github.com/greybax/generator-tslint

// Basic tslint.json setup

// This is a basic tslint.json setup which

// 1. Prevents use of any
// 2. Requires curly braces for if/else/for/do/while statements
// 3. Requires double quotes (") to be used for strings

// {
//     "rules": {
//     "no-any": true,
//     "curly": true,
//     "quotemark": [true, "double"]
//     }
// }


// Using a predeﬁned ruleset as default
// tslint can extend an existing rule set and is shipped with the defaults tslint:recommended and tslint:latest.
// tslint:recommended is a stable, somewhat opinionated set of rules which we encourage for general
//TypeScript programming. This conﬁguration follows semver, so it will not have breaking changes across
//minor or patch releases.

//tslint:latest extends tslint:recommended and is continuously updated to include conﬁguration for the
//latest rules in every TSLint release. Using this conﬁg may introduce breaking changes across minor
//releases as new rules are enabled which cause lint failures in your code. When TSLint reaches a major
//version bump, tslint:recommended will be updated to be identical to tslint:latest.


// So one can simply use:
// {
//     "extends": "tslint:recommended"
// }

//to have a sensible starting conﬁguration.
//One can then overwrite rules from that preset via rules, e.g. for node developers it made sense to set no-console
//to false:

// {
//     "extends": "tslint:recommended",
//     "rules": {
//     "no-console": false
//     }
//     }