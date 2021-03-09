import React, {useRef} from "react";
import {mount} from "enzyme";
import {Provider, default as redux} from "react-redux";
import configureStore from "redux-mock-store";
import renderer, {act} from "react-test-renderer";
import CatalogItem from "./catalogItem";

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
    catalogItems: basketItems,
    basketItems: basketItems,
};
const mockStore = configureStore();
const store = mockStore(initialState);


const initialProps = {
    catalogItem: basketItems,
    basketItem: basketItems,

};

const container = mount(
    <Provider store={store}>
        <CatalogItem {...initialProps}
        />
    </Provider>
);

describe('СatalogItem works', () => {

    it('should render СatalogItem Component', ()=> {
        const dom = container;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
