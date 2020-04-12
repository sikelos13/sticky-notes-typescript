import Header from "../../components/Header";
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Button, Input } from '@material-ui/core';

const HeaderProps = {
    handleSearch: () => {
        console.log('search note')
    },
    handleNoteAdd: () => {
        console.log('add note')
    },
    handleShowMarkdown: () => {
        console.log('show markdown')
    },
    markdownButtonText: "show markdown"
}

describe("App header container renders", () => {
    it('header render with its props when passed in', () => {

        const result = shallow(<Header {...HeaderProps} />);
        expect(result).toMatchSnapshot();
    });

    it('should render search input', () => {

        const result = mount(<Header {...HeaderProps} />);
        expect(result.find("input")).toHaveLength(1);
    });

    it('should add note on click', () => {

        const container = shallow(<Header {...HeaderProps} />);

        const addButton = container.find("#add-button");
        addButton.simulate('click');

        expect(addButton.prop('onClick')).toBeTruthy();
    });

    it('should input change', () => {

        const container = shallow(<Header {...HeaderProps} />);

        const addButton = container.find(Input);
        addButton.simulate('change');

        expect(addButton.prop('onChange')).toBeTruthy();
    });


    it('should show markdown', () => {

        const container = shallow(<Header {...HeaderProps} />);

        const showMarkdown = container.find("#show-markdown");
        showMarkdown.simulate('click');

        expect(showMarkdown.prop('onClick')).toBeTruthy();
    });
});
