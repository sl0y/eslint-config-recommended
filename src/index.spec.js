'use strict'; // ALWAYS


const eslint = require('eslint');
const {it, describe, expect} = require('@jest/globals');
const own = require('./index.js').rules;


describe('rules', () => {

    it('from eslint are shadowed by own rules', () => {
        for (const key of (new eslint.Linter()).getRules().keys()) {
            expect([key, own[key]]).not.toEqual([key, void 0]);
        }
    });

});
