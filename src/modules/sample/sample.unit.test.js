// const reactMock = require('react');
//
// const setHookState = (newState) => jest.fn().mockImplementation(() => [
//     newState,
//     () => {},
// ]);
// reactMock.useState = setHookState({
//     arrayValues: [],
//     isFetching: false,
// });
import React from "react";
import {Sample} from "./sample.tsx";
import {mount} from "enzyme";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import {act} from "react-dom/test-utils";

const initialState = {
    comments: {
        comments: null,
        index: null
    }
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('usesample', () => {
    let results;
    const renderHook = (hook) => {
        function HookWrapper() {
            results = hook();
            return null;
        }
        mount(
            <Provider store={store}>
                <HookWrapper/>
            </Provider>
        );
        return results;
    };
    it('works', () => {
        renderHook(Sample)
        expect(results.index).toEqual(0)
    })

    it('works', () => {
        renderHook(Sample)
        expect(results.index).toEqual(0)
        // act(() => {
        //     results.nextComment();
        // });
        expect(results.index).toEqual(0)
    })
});
