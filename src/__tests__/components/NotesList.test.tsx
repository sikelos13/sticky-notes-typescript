import NotesList from "../../components/NotesList";
import * as React from 'react';
import { shallow } from 'enzyme';

const notesList = [
    { id: 1234, text: "check first test", title: "check first test tile", active: false },
    { id: 1235, text: "check second test", title: "check second test tile", active: false },
    { id: 1236, text: "check third test", title: "check third test tile", active: false },
    { id: 1237, text: "check fourth test", title: "check fourth test tile", active: true }
];
const NotesListProps = {
    notes: notesList,
    selectedNote: {
        title: "Your new note",
        text: "",
        color: "",
        id: Date.now()
    },
    onNoteDelete: () => {
        console.log('deleted')
    },
    onSelectNote: () => {
        console.log('selected')
    },
    onNoteAdd: () => {
        console.log('added')
    }
}

describe("Notes list container renders", () => {
    it('renders with props when passed in', () => {


        const result = shallow(<NotesList {...NotesListProps} />).contains(<input />);
        expect(result).toMatchSnapshot();
    });

    it('finds the right div for mounting the notes list', () => {

        const container = shallow(<NotesList {...NotesListProps} />);

        expect(container.find('div#noteslist-container')).toBeTruthy();
    });
});