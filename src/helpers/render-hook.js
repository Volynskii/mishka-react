import {mount} from "enzyme";
import {Provider} from "react-redux";
import React from "react";

let store;
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

export default renderHook;
