import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {


  it('ErrorBoundary: renders componentDidCatch', () => {
    const errorBoundaryComponent = shallow(<ErrorBoundary />);
    const mockComponentDidCatch = jest.fn();

    expect(mockComponentDidCatch).toBe('');
  });

  // it('componentDidCatch: should setState for hasError to true if there is an error', () => {
  //   const errorBoundaryComponent = shallow(<ErrorBoundary />);
  //   expect(errorBoundaryComponent.instance().componentDidCatch).toBe('');
  // });

  // it('ErrorBoundary: returns error message if componentDidCatch an error', () => {

  // });

  // it('ErrorBoundary: returns robots / CardList if componentDid *Not* Catch an error', () => {

  });

});