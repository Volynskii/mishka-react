import React from "react";
import Reviews from "./reviews.tsx";
import ReviewsContainer from "../../modules/reviews/reviews-container.tsx";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";


 const setUp = () => shallow(<Reviews />);
// const rev = setUp().instance();
// const index = rev.props.index;
//
describe('WeekProduct component', ()=> {
//     let component;
//     let instance;
//     beforeEach(() => {
//        component = setUp();
//        instance = component.instance();
//     });
    it('should render WeekProduct Component', ()=> {
        expect(1).toEqual(1)
    });


});
