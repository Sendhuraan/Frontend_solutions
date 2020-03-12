/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './index.jsx';
import { assert } from 'chai';

describe('component', function() {

	it('exists', function() {
		var comp = ReactTestUtils.renderIntoDocument(<App/>);
		assert.exists(comp);
	});

	it('is a Composite Component', function() {
		var comp = ReactTestUtils.renderIntoDocument(<App/>);

		assert.equal(ReactTestUtils.isCompositeComponent(comp), true);
	});

});
