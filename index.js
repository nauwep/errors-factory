"use strict";

class ErrorsFactory {

    constructor(errorsDefinitions = []) {

        if (errorsDefinitions === null || !Array.isArray(errorsDefinitions)) {
            throw new Error('errors must be defined as an Array of error definition');
        }

        errorsDefinitions.forEach((errorDefinition) => {

            let error = new Error(
                `${errorDefinition.code} - ${errorDefinition.message}`);

            Object.defineProperty(this, errorDefinition.code, {
                value: error
            });

        });

    }

}

module.exports = ErrorsFactory;
