import React from 'react';
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import expect from 'expect'
import ReactDOM from 'react-dom';
import App from './App';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe("App", () => {
  let wrapper, div;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  describe("Header/Search Bar", () => {
      it("State exists to hold search value in our input", () => {
          expect(wrapper.state().searchValue).toBe("");
      })

      it("Updates searchValue state upon user entry", () => {
        wrapper.find('input').simulate('change', {target: {value: 'Movies'}})
        expect(wrapper.state().searchValue).toBe("Movies")
      })

      xit("Calls a search function when the search button is clicked", () => {
        sinon.spy(wrapper.instance(), "_handleSearchClick()")

        wrapper.find('#search').simulate('click')
        expect(spy).toHaveBeenCalled()


      })
  })
})
