import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {useReviews} from "../../modules/reviews/useReviews";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {FormReviews} from "./form-reviews";
import * as redux from "react-redux";
import {act} from "react-dom/test-utils";

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
    preventDefault: jest.fn(),
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
    isOpened:results.display,
    closePopup: results.onClosePopup,
    openSuccessPopup: results.onOpenSuccessPopup,

};

const container = mount(
    <Provider store={store}>
        <FormReviews {...initialProps}
        />
    </Provider>
);

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockDispatchFn = jest.fn()
useDispatchSpy.mockReturnValue(mockDispatchFn);
describe('Reviews work', () => {

    it('should render FormReviews Component', ()=> {
        const dom = <FormReviews {...initialProps} />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('FormReviews can be opened and closed', () => {
        expect(results.display).toBe('none')
        act(() => {
            results.onOpenPopup()
        });
        expect(results.display).toEqual('flex')
        act(() => {
            results.onClosePopup()
        });
        expect(results.display).toEqual('none')
    });
});
