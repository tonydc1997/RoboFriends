import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {

  let errorBoundaryComponent;

  beforeEach(() => {
    errorBoundaryComponent = shallow(
    <ErrorBoundary>
      <h3>Child Component Here!</h3>
    </ErrorBoundary>);
  });

  it('ErrorBoundary: renders child component when no errors are found', () => {
    expect(errorBoundaryComponent.find('h3').exists()).toBeTruthy();
  });

  describe('When error is detected', () => {

    let errorBoundaryComponent;

    beforeEach(() => {
      errorBoundaryComponent = shallow(
      <ErrorBoundary>
        <h3>Child Component Here!</h3>
      </ErrorBoundary>);
    });

    it('ErrorBoundary: should update state to indicate an error', () => {
      errorBoundaryComponent.instance().componentDidCatch('Ooops, there was an error');
      errorBoundaryComponent.update();
  
      expect(errorBoundaryComponent.instance().state.hasError).toBeTruthy();
    });
  
    it('ErrorBoundary: should not render child component', () => {
      errorBoundaryComponent.instance().componentDidCatch('Ooops, there was an error');
      errorBoundaryComponent.update();
  
      expect(errorBoundaryComponent.find('h3').exists()).toBe('false');
    });
  });

});
