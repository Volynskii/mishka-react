import React from "react";
import WeekProduct from "./week-product";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";

describe('WeekProduct component', ()=> {
    it('should render WeekProduct Component', ()=> {
        const dom = <WeekProduct />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' WeekProduct Component should have a link', ()=> {
        const dom = shallow(<WeekProduct />);
        const link = dom.find("a");
        expect(link.toBeDefined)
    });
});
