import React from "react";
import Features from "./features";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";

describe('Features component', ()=> {
    it('should render Features Component', ()=> {
        const dom = <Features />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' Features Component should have 6 items', ()=> {
        const dom = shallow(<Features />);
        const link = dom.find(".features__list__item");
        expect(link).toHaveLength(6)
    });
});
