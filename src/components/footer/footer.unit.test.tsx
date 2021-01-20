import React from "react";
import Footer from "./footer";
import renderer from "react-test-renderer";


describe('Footer component', ()=> {
    it('should render Footer Component', ()=> {
        const dom = <Footer />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
