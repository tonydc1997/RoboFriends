import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {

  const errorBoundaryComponent = shallow(<ErrorBoundary />);

  it('ErrorBoundary: returns error message if componentDidCatch an error', () => {

  });

  it('ErrorBoundary: returns robots / CardList if componentDid *Not* Catch an error', () => {

  });

});