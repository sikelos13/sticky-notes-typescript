import NotesApp from "../../containers/NotesApp";
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../../components/Header';
import { Note } from "../../types";

const notesList = [
  { id: 1234, text: "check first test", title: "check first test tile", active: false },
  { id: 1235, text: "check second test", title: "check second test tile", active: false },
  { id: 1236, text: "check third test", title: "check third test tile", active: false },
  { id: 1237, text: "check fourth test", title: "check fourth test tile", active: true }
];

describe("Notes app container renders", () => {
  it('renders children when passed in', () => {
    const result = shallow((
      <NotesApp>
        <div className="unique" />
      </NotesApp>
    ));

    expect(result).toBeTruthy();
  });

  it('should render header component', () => {

    const wrapper = mount(<NotesApp />);
    expect(wrapper.find(Header).length).toEqual(1);

  });

  it('should take a search value and return filtered notes', () => {

    const event = {
      target: {
        value: "test search"
      }
    }
    const wrapper = shallow(<NotesApp />);
    expect(wrapper.state('searchValue')).toBe("");
    (wrapper.instance() as NotesApp).handleSearch(event);
    expect(wrapper.state('filteredNotes')).not.toBeNull();
  });

  it('should return new array with one more note', () => {

    const wrapper = shallow(<NotesApp />);
    wrapper.setState({ filteredNotes: notesList })
    expect(wrapper.state('filteredNotes')).toHaveLength(4);
    (wrapper.instance() as NotesApp).handleNoteAdd();
    (wrapper.instance() as NotesApp).handleNoteAdd();
    expect(wrapper.state('filteredNotes')).toHaveLength(2);
  });

  it('should return new array with note title changed', () => {

    const event = {
      target: {
        name:"title",
        value: "test text change"
      }
    }

    const wrapper = shallow(<NotesApp />);
    expect(wrapper.state('filteredNotes')).toHaveLength(2);
    (wrapper.instance() as NotesApp).handleNoteAdd();
    (wrapper.instance() as NotesApp).handleNoteAdd();

    const randomNotesList = (wrapper.state('filteredNotes') as Note[]);

    (wrapper.instance() as NotesApp).handleSelectedNote(randomNotesList[0]);
    (wrapper.instance() as NotesApp).handleTextChange(event);
    
    expect(wrapper.state('selectedNote')).toHaveProperty("title", "test text change");
  });

  it('should return new array with one less note', () => {

    const wrapper = shallow(<NotesApp />);
    expect(wrapper.state('filteredNotes')).toHaveLength(4);
    (wrapper.instance() as NotesApp).handleNoteAdd();
    (wrapper.instance() as NotesApp).handleNoteAdd();
    const randomNotesList = (wrapper.state('filteredNotes') as Note[]);
    (wrapper.instance() as NotesApp).handleNoteDelete(randomNotesList[0]);
    const updatedNotesList = (wrapper.state('filteredNotes') as Note[]);
    expect(updatedNotesList.length).toBeGreaterThan(3);
  });

  it('should set state to show markdown', () => {

    const wrapper = shallow(<NotesApp />);
    expect(wrapper.state('showMarkdown')).toBeFalsy();
    expect(wrapper.state('markdownButtonText')).toEqual("Show markdown");
    (wrapper.instance() as NotesApp).handleShowMarkdown();
    expect(wrapper.state('showMarkdown')).toBeTruthy();
    expect(wrapper.state('markdownButtonText')).toEqual("Edit note");
  });
});
