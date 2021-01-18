import React from 'react';
import { shallow } from 'enzyme';
import Employer from '../Components/CreateEmployerComponent';

const setUp = (props = {}) => {
    const component = shallow(<Employer {...props} />);
    return component;
};

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('have props', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            organizationName: 'Capgemini',
            address: 'Pune',
            contactNo: '98745632',
            email: 'abc@capgemini.com',
            username: 'abc',
            password: 'abc@1234#'
        };
        wrapper = setUp(props);
    });

    it('should render employee component without errors', () => {
        const component = findByTestAttr(wrapper, 'EmployerComponent');
        expect(component.length).toBe(1);
    });

    it('should render input tag', () => {
        const input = findByTestAttr(wrapper, 'organizationName');
        expect(input.length).toBe(1);
    })

});

describe('should not have props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper, 'EmployerComponent');
        console.debug(component);
        expect(component.length).toBe(0);
    });
});
