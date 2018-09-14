import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {

  let errorBoundaryComponent;

  beforeEach(() => {
    errorBoundaryComponent = shallow(
    <ErrorBoundary>
      <h1>Child Component Here!</h1>
    </ErrorBoundary>);
  });

  it('ErrorBoundary: renders child component when no errors are found', () => {

  });

});