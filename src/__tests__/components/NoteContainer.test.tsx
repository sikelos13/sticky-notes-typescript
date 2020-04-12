import NoteContainer from "../../components/NoteContainer";
import * as React from 'react';
import { shallow } from 'enzyme';

const NoteContainerProps = {
    title: "Test title",
    active: true,
    onDelete: () => {
        console.log('delete')
    },
    onSelect: () => {
        console.log('text changes')
    }
}

describe("Note container renders", () => {
    it('renders with props when passed in', () => {

        const result = shallow(<NoteContainer {...NoteContainerProps} />).contains(<div className="note note-active"></div>);
        expect(result).toMatchSnapshot();
    });

    it('should delete note on click', () => {

        const container = shallow(<NoteContainer {...NoteContainerProps} />);

        const deleteButton = container.find('span.delete-note');
        deleteButton.simulate('click');

        expect(deleteButton.prop('onClick')).toBeTruthy();

    });

    it('should select note on click', () => {

        const container = shallow(<NoteContainer {...NoteContainerProps} />);

        const selectButton = container.find('div.note');
        selectButton.simulate('click');

        expect(selectButton.prop('onClick')).toBeTruthy();

    });
});
