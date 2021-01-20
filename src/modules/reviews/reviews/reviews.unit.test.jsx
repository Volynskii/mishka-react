import React from "react";
import {mount, shallow} from "enzyme";
import {Provider, useSelector} from "react-redux";
import {Reviews} from "./reviews";
import {useReviews} from "../useReviews";
import configureStore from "redux-mock-store";
import {act} from "react-dom/test-utils";
import {rootReducer} from "../../../store/reducer";


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
    index:0
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
    comments:results.comments,
    index: results.index,
    nextComment: results.nextComment,
    prevComment: results.prevComment
};
const container = shallow(<Reviews comments={comments} index={0}  />);
/* mocking useSelector on our mock store */
jest
    .spyOn(useReviews, "comments")
    .mockImplementation(state => store.getState());
console.log('INDEX',useReviews().index)
describe('usesample', () => {

    // it('works', () => {
    //    const reviewsHook = renderHook(useReviews)
    //     expect(results.index).toEqual(0)
    //     act(() => {
    //         results.nextComment();
    //     });
    //     expect(results.index).toEqual(1)
    // })
    it('works', () => {

        const btn = container.find(".reviews__slider__right");
        act(() => {
             results.nextComment();
        });
        expect(results.index).toEqual(1)

        act(() => {
            results.prevComment();
        });
        expect(results.index).toEqual(0)

         expect(results.commentsData[0].comment).toBe(comments[0].comment)
// btn.simulate('click')
//         expect(container.find('.reviews__comment').text()).toBe(comments[1].comment)


    })


});




// const initialState = {
//     comments:{comment: '123'}
// };
// const mockStore = configureStore();
// const store = mockStore(initialState);
//
// let results;
// const renderHook = (hook) => {
//     function HookWrapper() {
//         results = hook();
//         return null;
//     }
//     shallow(
//         <Provider store={store}>
//             <HookWrapper/>
//         </Provider>
//     );
//     return results;
// };
// renderHook(useReviews)
// const props = {
//    comments: {comment: '123'},
//     index: 0,
//     nextComment: results.nextComment,
//     prevComment: results.prevComment
// };
//  const setUp = (props) => mount(
//      <Provider store={store}>
//          <Reviews comments={{comment:'123'}}/>
//   </Provider>
//  );
//
//  const wrapper = setUp(props);
//
//
// describe('WeekProduct component', ()=> {
//
//     it('should render WeekProduct Component', ()=> {
//         expect(results.index).toEqual(0)
//             expect(wrapper.find('.reviews__comment').html()).not.toBe(null)
//          // expect(wrapper.find('.reviews__comment').text()).toBe(props.comments[0].comment)
//         // expect(wrapper.find('.reviews__author__name').text()).toBe(props.comments[0].author)
//         // expect(wrapper.find('.reviews__author__email').text()).toBe(props.comments[0].email)
//         //
//         // const btn = wrapper.find(".reviews__slider__right")
//         // btn.simulate("click");
//         // expect(0).toEqual(0)
//         //
//         // expect(wrapper.find('.reviews__comment').text()).toBe(props.comments[1].comment)
//         // expect(wrapper.find('.reviews__author__name').text()).toBe(props.comments[1].author)
//         // expect(wrapper.find('.reviews__author__email').text()).toBe(props.comments[1].email)
//     });
//
// });

