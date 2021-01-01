const Footer =  require("./footer");
import { shallow } from 'enzyme';
it ("should render Footer component", () => {
   const component = shallow(<Footer>);
   const wrapper = component.find(".footer__wrapper");
       expect(wrapper.length).toBe(1);
});
