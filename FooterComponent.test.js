import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/FooterComponent';

describe('Footer Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<Footer />);
        const wrapper = component.find('.footer');
        expect(wrapper.length).toBe(1);
    });

});