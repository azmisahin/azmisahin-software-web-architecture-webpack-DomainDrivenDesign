/**
 * ====================================================================================================
 * Name    : Components Unit Test
 * File    : components.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var Instance = require('../../src/components');

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Instance Create", function () {

        // Define
        var expected = Instance;
        var actual = new Instance();
    
        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}