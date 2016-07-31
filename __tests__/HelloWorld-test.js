jest.unmock('../HelloWorld.js');

import React from 'react';
const ReactTestRenderer = require('react-test-renderer');

import HelloWorld from '../HelloWorld';

describe('<HelloWorld />', () => {
  it('renders correctly', () => {
    const tree = ReactTestRenderer.create(
      <HelloWorld />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
