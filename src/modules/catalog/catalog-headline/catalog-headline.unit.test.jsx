import React, {useRef} from "react";
import {mount} from "enzyme";
import {Provider, default as redux} from "react-redux";
import configureStore from "redux-mock-store";
import renderer, {act} from "react-test-renderer";
import catalogItems from "../../../mocks/catalog-items-mock";
import {useCatalogHeadline} from "../useCatalogHeadline";
import {CatalogHeadline} from "./catalog-headline";

const basketItems = [
    {id:0,
        src: "./images/catalog/catalog-item-1.png",
        itemPrice: 1200,
        itemName:'Зайчик-попрыгайчик',
        itemParamOneName:'рост',
        itemParamOneValue: 30,
        itemParamOneUnit: 'см',
        itemParamTwoName: 'вес',
        itemParamTwoValue: 200,
        itemParamTwoUnit: 'г',
        itemQuantity: 1
    },
    {id:1,
        src: "./images/catalog/catalog-item-2.png",
        itemPrice: 690,
        itemName:'Корзинка для белья',
        itemParamOneName:'Диаметр',
        itemParamOneValue: 15,
        itemParamOneUnit: 'см',
        itemParamTwoName: 'высота',
        itemParamTwoValue: 10,
        itemParamTwoUnit: 'см',
        itemQuantity: 1
    },
    {id:2,
        src: "./images/catalog/catalog-item-3.png",
        itemPrice: 1500,
        itemName:'Большая корзинка для игрушек',
        itemParamOneName:'Диаметр',
        itemParamOneValue: 30,
        itemParamOneUnit: 'см',
        itemParamTwoName: 'высота',
        itemParamTwoValue: 30,
        itemParamTwoUnit: 'см',
        itemQuantity: 1},

];

const initialState = {
    catalogItems: catalogItems,
    basketItems: basketItems,
};
const mockStore = configureStore();
const store = mockStore(initialState);

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


renderHook(useCatalogHeadline)

const initialProps = {
     catalogItemsData:catalogItems,
     basketItemsData: catalogItems

};

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

const container = mount(
    <Provider store={store}>
        <CatalogHeadline {...initialProps}
        />
    </Provider>
);

describe('VideoBlock works', () => {

    it('should render VideoBlock Component', ()=> {
        const dom = container;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('VideoBlock props work', ()=> {
    //     expect(results.isPlaying).toBe(false)
    //     act(() => {
    //         results.handleMouseEnter();
    //     });
    //     expect(results.isPlaying).toBe(false)
    //     act(() => {
    //         results.handleMouseLeave();
    //     });
    //     expect(results.isPlaying).toBe(false)
    // });
});
