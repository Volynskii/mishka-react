import React from "react";
import MainHeadline from "./main-headline";
import renderer from "react-test-renderer";


describe('MainHeadline component', ()=> {
    it('should render MainHeadline Component', ()=> {
        const dom = <MainHeadline />;
        const component = renderer.create(dom);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
