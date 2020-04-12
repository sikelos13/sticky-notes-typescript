import NoteEditor from "../../components/NoteEditor";
import * as React from 'react';
import { shallow } from 'enzyme';
import ReactMarkdown from 'react-markdown';

const NoteEditorProps = {
  selectedNote: {
    title: "Your new note",
    text: "",
    color: "",
    id: Date.now()
  },
  showMarkdown: true,
  onNoteSave: () => {
    console.log('save')
  },
  handleTextChange: () => {
    console.log('text changes')
  }
}

describe("Notes editor container renders", () => {
  it('renders input inside editor container', () => {

    const result = shallow(<NoteEditor {...NoteEditorProps} />).contains(<input />);
    expect(result).toMatchSnapshot();
  });

  it('renders textarea inside editor', () => {

    const result = shallow(<NoteEditor {...NoteEditorProps} />).contains(<textarea />);
    expect(result).toMatchSnapshot();
  });

  it('renders textarea inside editor', () => {

    const result = shallow(<NoteEditor {...NoteEditorProps} />).contains(<ReactMarkdown />);
    expect(result).toMatchSnapshot();
  });
});
