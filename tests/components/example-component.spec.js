/* globals describe, it, beforeEach, afterEach */

import React from 'react';

import { expect } from 'chai';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Example component test', () => {
    it('Should say true is true', () => {
        expect(true).to.equal(true);
    });
});
