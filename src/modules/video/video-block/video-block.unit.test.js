import React, {useRef} from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer, {act} from "react-test-renderer";
import * as redux from "react-redux";
import {useVideo} from "../useVideo";
import {VideoBlock} from "./video-block.tsx";

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
comments:comments,
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
// const video = jest.fn();
// const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { video } });

renderHook(useVideo)

// const useDispatchSpy = jest.spyOn(React, 'useRef');
// const mockDispatchFn = jest.fn()
// useDispatchSpy.mockReturnValue(mockDispatchFn);

const initialProps = {
    width:`100%`,
height:'100%',
src:null,
poster: null,
isPlaying:results.isPlaying,
onMouseEnter:results.handleMouseEnter,
onMouseLeave:results.handleMouseLeave

};

const container = mount(
    <Provider store={store}>
        <VideoBlock {...initialProps}
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
