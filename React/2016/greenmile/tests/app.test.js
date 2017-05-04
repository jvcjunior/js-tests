
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Form from '../components/Form';
import Section from '../components/Section';
import FormItem from '../components/FormItem';

describe('<Form />', () => {
    it('should contain a form tag with no children', () => {
        const emptyObject = {};
        const wrapper = shallow(<Form formData={emptyObject} />);
        expect(wrapper.html()).toBe('<form></form>');
    });

    it('should contain a h4 tag', () => {
        const dataObject = {
            "sections": [{
                    "description": "Dados de autenticação"
            }]
        };

        const wrapper = shallow(<Form formData={dataObject} />);
        expect(wrapper.find('h4').length).toBe(1);

    });

    it('should contain a 1 section', () => {
        const dataObject = {
            "sections": [{
                    "description": "Dados de autenticação",
                    "fields": [
                        {"name": "login", "mandatory": true, "type": "text"}
                    ]
            }]
        };

        const wrapper = shallow(<Form formData={dataObject} />);
        expect(wrapper.find(Section).length).toBe(1);
    });
});
