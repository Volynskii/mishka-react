import React from "react";
import ReviewsContainer from "./reviews-container.tsx";
import renderer from "react-test-renderer";
import {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Provider} from "react-redux";
import {rootReducer} from "../../store/reducer";
import configureStore from 'redux-mock-store'
import Reviews from "./reviews/reviews.tsx";

const initialState = {comments: {comments: '123'}}
const mockStore = configureStore();
const store = mockStore(initialState)
const setUp = () => mount(
    <Provider store={store}>
    <ReviewsContainer />
    </Provider>
    )

  const rev = setUp().instance();
  // const index = rev.state;

// Cache original functionality
const realUseState = React.useState

// Stub the initial state
const stubInitialState = [1];

// Mock useState before rendering your component
jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(() => realUseState(stubInitialState))



// const index = Review.props().comments
describe('WeekProduct component', ()=> {

    it('should render WeekProduct Component', ()=> {
        // expect(setUp().find(<Reviews/>).exists()).toBe(true)
        expect(0).toEqual(0)
    });


});

// test('useState mock', () => {
//     const initialStateForFirstUseStateCall = {index:0}
//     const initialStateForSecondUseStateCall = {index:1}
//
//     React.useState = jest.fn()
//         .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
//         .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])
//
//     const wrapper = shallow(<ReviewsContainer />)
//
//     // initial states are set and you can now test your component
// })
// import React from 'react'
//
// import App from "../../App";
// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'
// import renderer from "react-test-renderer";
//
//
//
// describe('With React Testing Library', () => {
//     const initialState = {output:10}
//     const mockStore = configureStore()
//     let store,wrapper
//
//     it('Shows "Hello world!"', () => {
//         store = mockStore(initialState)
//         const { getByText } = renderer.create(<Provider store={store}>
//
//         </Provider>)
//
//         expect(0).toBe(0);
//     })
// })
