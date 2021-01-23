import React from "react";
import {mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import {useReviews} from "../../modules/reviews/useReviews";
import configureStore from "redux-mock-store";
import {act} from "react-dom/test-utils";
import renderer from "react-test-renderer";
import {FormReviews} from "./form-reviews";
import {Reviews} from "../../modules/reviews/reviews/reviews";
import * as redux from "react-redux";

let comments = [
    {
        comment: 'Я молодая мама,' +
            ' но всё равно фотографии' +
            ' не набирали и близко такого ' +
            'количества лайков, как у ' +
            'популярных инстамамочек.' +
            ' В отчаянии, я накупила ' +
            'аксессуаров и игрушек в ' +
            'Мишке, и мои фотографии ' +
            'сразу стали более стильными,' +
            ' а также набирают больше лайков!',
        author: 'Анастасия Красильникова',
        email: '@misssssiskras'
    },
    {
        comment: 'Я молодой парень и мои мои' +
            ' фотографии обычно не набирали' +
            ' большого количества лайков, ' +
            'но как только я купил игрушки ' +
            'разных форматов цветов и форматов' +
            ' количество лайков пошло в гору!' +
            ' Я очень доволен! ',
        author: 'Михаил Соколов!',
        email: 'sokolov@gmail.com'
    },
    {
        comment: 'Я очень доволен данными' +
            ' товарами,товары имеют' +
            ' чрезвычайно высокое качество,' +
            ' ' +
            'заказал себе, друзьям, бабушке,дедушке, папе и маме!',

        author: 'Илья Перевалов!',
        email: 'perevalov@gmail.com'
    }

];

const initialState = {
    comments: comments,
    index:0,

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

renderHook(useReviews)

const initialProps = {
    isOpened:results.isOpened,
    closePopup: results.onClosePopup,
    openSuccessPopup: results.onOpenSuccessPopup,

};

const container = mount(
    <Provider store={store}>
        <FormReviews {...initialProps}/>
    </Provider>
);

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockDispatchFn = jest.fn()
useDispatchSpy.mockReturnValue(mockDispatchFn);
describe('Reviews work', () => {

    it('should render Reviews Component', ()=> {
        const submitButton = container.find('#name');

        const dom = <FormReviews isOpened={results.display} closePopup={results.onClosePopup}
                                 openSuccessPopup={results.openSuccessPopup} />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        // const dom = <FormReviews {...initialProps} />;
        // const component = renderer.create(dom);
        // const tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    });

});
