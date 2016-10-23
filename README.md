# ErrorsFactory

Define your errors in a dedicated file, then use them by their code

[![npm](https://img.shields.io/npm/v/errors-factory.svg)](https://www.npmjs.com/package/errors-factory)
[![node](https://img.shields.io/node/v/errors-factory.svg)]()
[![Travis](https://img.shields.io/travis/nauwep/errors-factory.svg)](https://travis-ci.org/nauwep/errors-factory)
[![Coveralls](https://img.shields.io/coveralls/nauwep/errors-factory.svg)](https://coveralls.io/github/nauwep/errors-factory)

## Overview

ErrorsFactory allows defining a set of error in a centralized place (a JSON file, for instance) to, then, be used anywhere in your app.
It's especially useful when an error is used multiple times, updating its content will be done once.

Looking at the logs will provide you the message and the code identifying the error

## Usage

Install from npm

```
npm install errors-factory
```

Require in your code

```javascript
const ErrorsFactory = require('errors-factory');
```

Manage your errors in an Array with Objects providing a `code` and `message` properties

```javascript
const errorDefinitions = [{
    code: 'ERR_001',
    message: '1st error'
}, {
    code: 'ERR_002',
    message: '2nd error'
}];
```

Pass the error definitions to the factory

```javascript
const errors = new ErrorsFactory(errorDefinitions);
```

Get the errors by its code

```javascript
throw errors.ERR_001; // Equivalent to new Error('ERR_001 - 1st error');
```

## Example

```json
// errors.json
[{
    "code": "ERR_APP_XXX",
    "message": "Not yet implemented"
}, {
    "code": "ERR_APP_001",
    "message": "bar shall not be null"
}]
```

```javascript
// app.js
const ErrorsFactory = require('errors-factory');
const errors = new ErrorsFactory(require('./errors.json'));

function foo(bar) {
    if (bar === null) {
        throw errors.ERR_APP_001; // Equivalent to new Error('ERR_APP_001 - bar shall not be null');
    }

    throw errors.ERR_APP_XXX; // Equivalent to new Error('ERR_APP_XXX - Not yet implemented');
}
```
