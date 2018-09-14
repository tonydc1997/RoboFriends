import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox Component', () => {

  let searchBoxComponent;

  beforeEach(() => {
    searchBoxComponent = shallow(<SearchBox />);
  });

  it('SearchBox: returns a div and input', () => {
    expect(searchBoxComponent.html()).toContain('div');
    expect(searchBoxComponent.html()).toContain('input');
  });

  it('SearchBox: Snapshots the CSS-in-JS styles so if altered and breaks the UX, one can view the differences', () => {
    expect(searchBoxComponent).toMatchSnapshot();
  });
});
