"use strict";

const should = require('should');
const errorsTestFilePath = './errors.json';
const testErrors = require(errorsTestFilePath);

const ErrorsFactory = require('../index');

describe('ErrorsFactory', function() {

    describe('constructor', function() {

        it('should return an instance of ErrorsFactory', function() {
            let instance = new ErrorsFactory(testErrors);
            should(instance).be.an.instanceOf(ErrorsFactory);
        });

        it('should raise an error for invalid argument', function() {
            should(function() {
                new ErrorsFactory(null);
            }).throw();
            should(function() {
                new ErrorsFactory('string');
            }).throw();
        });

    });

    describe('factory instance', function() {

        let errors = new ErrorsFactory(testErrors);

        it('should provide unitary error as property', function() {
            should.exists(errors.ERR_APP_001);
            should.exists(errors.ERR_APP_002);
        });

        describe('unitary error property', function() {

            it('should return the corresponding error', function() {
                should(function() {
                    throw errors.ERR_APP_001;
                }).throw(new Error(
                    'ERR_APP_001 - The argument must be an Array'
                ));
                should(function() {
                    throw errors.ERR_APP_002;
                }).throw(new Error(
                    'ERR_APP_002 - Something is wrong'));
            });

        });

    });

});
