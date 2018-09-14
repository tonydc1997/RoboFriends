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
    expect(errorBoundaryComponent.find('h1').exists()).toBeTruthy();
  });

  it('ErrorBoundary: should update state to indicate an error if it exists', () => {
    errorBoundaryComponent.instance().componentDidCatch('Ooops, there was an error');
    errorBoundaryComponent.update();

    expect(errorBoundaryComponent.instance().state.hasError).toBeTruthy();
  });

});