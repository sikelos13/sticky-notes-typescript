import React from 'react';
import { Box } from '@material-ui/core';
import NoteList from '../components/NotesList';
import NoteEditor from '../components/NoteEditor';
import { Note } from '../types';
import Header from '../components/Header';
import NoNoteSelected from '../components/NoNoteSelected';
import { NotesAppState } from '../types';
import {
    getUpdatedListOnSelect,
    getUpdatedListOnChangeText,
    getUpdatedListOnDelete,
    fetchNotes
} from '../utils';

class NotesApp extends React.PureComponent<{}, NotesAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            notes: [],
            showMarkdown: false,
            markdownButtonText: "Show markdown",
            filteredNotes: [],
            searchValue: ""
        }
    }

    componentDidMount() {
        let localNotes: any = localStorage.getItem('notes');
        let parsedLocalNotes = JSON.parse(localNotes);

        if (parsedLocalNotes) {
            const notesList = fetchNotes(parsedLocalNotes);

            this.setState({
                notes: notesList,
                filteredNotes: notesList
            });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleSearch = (event: any) => {
        const { notes } = this.state;
        const value = event.target.value
        
        if (notes) {
            if (value !== '') {
                const returnedFilteredNotes = notes.filter((note: Note) => {
                    if ((note.text.toLowerCase().indexOf(value.toLowerCase()) !== -1) || (note.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)) {
                        return note;
                    }
                });

                const updatedList = getUpdatedListOnSelect(returnedFilteredNotes, returnedFilteredNotes[0]);

                this.setState({
                    filteredNotes: updatedList,
                    selectedNote: returnedFilteredNotes.length < 1 ? undefined : returnedFilteredNotes[0]
                })
            } else {
                this.setState({
                    filteredNotes: notes,
                    selectedNote: undefined
                })
            }
        }
    }

    handleNoteDelete = (note: Note) => {
        const { notes, filteredNotes } = this.state;

        const noteId = note.id;
        const newNotes = getUpdatedListOnDelete(notes, noteId);
        const newFilteredNotes = getUpdatedListOnDelete(filteredNotes, noteId);
        const updatedList = getUpdatedListOnSelect(newFilteredNotes, newNotes[0]);

        if (newNotes.length > 0) {
            this.setState({
                notes: newNotes,
                filteredNotes: updatedList,
                selectedNote: {
                    ...newNotes[0],
                    active: true
                }
            });
        } else {
            this.setState({
                notes: newNotes,
                filteredNotes: newNotes,
                selectedNote: undefined
            });
        }
    };

    handleNoteAdd = () => {
        const { notes } = this.state;

        let newNote = {
            title: "Your new note title",
            text: "",
            id: Date.now()
        }

        let newNotes = notes.slice();
        newNotes.unshift(newNote);
        const updatedNotesList = getUpdatedListOnSelect(newNotes, newNote);
        const updatedFilteredList = getUpdatedListOnSelect(newNotes, newNote);

        this.setState({
            notes: updatedNotesList,
            selectedNote: newNote,
            filteredNotes: updatedFilteredList
        });
    };

    handleSelectedNote = (note: Note) => {
        const { notes, filteredNotes } = this.state;

        const updatedNotesList = getUpdatedListOnSelect(notes, note);
        const updatedFilteredList = getUpdatedListOnSelect(filteredNotes, note);

        this.setState({
            notes: updatedNotesList,
            filteredNotes: updatedFilteredList,
            selectedNote: {
                ...note,
                active: true
            }
        });
    }

    _updateLocalStorage = () => {
        const { notes } = this.state;
        let stringfyNotes = JSON.stringify(notes);
        localStorage.setItem('notes', stringfyNotes);
    };

    handleTextChange = (event: any) => {
        const { selectedNote, filteredNotes } = this.state;

        let localNotes: any = localStorage.getItem('notes');
        let parsedLocalNotes = JSON.parse(localNotes);

        const updatedNotesList = getUpdatedListOnChangeText(parsedLocalNotes, event, selectedNote);
        const updatedFilteredList = getUpdatedListOnChangeText(filteredNotes, event, selectedNote);

        this.setState({
            selectedNote: {
                ...selectedNote!,
                [event.target.name]: event.target.value
            },
            notes: updatedNotesList,
            filteredNotes: updatedFilteredList
        });
    };

    handleShowMarkdown = () => {
        const { showMarkdown } = this.state;
        this.setState({
            showMarkdown: !showMarkdown,
            markdownButtonText: !showMarkdown ? "Edit note" : "Show markdown"
        })
    }

    render() {
        const { selectedNote, filteredNotes, showMarkdown, markdownButtonText } = this.state;

        return (
            <>
                <Header
                    handleSearch={this.handleSearch}
                    handleNoteAdd={this.handleNoteAdd}
                    handleShowMarkdown={this.handleShowMarkdown}
                    markdownButtonText={markdownButtonText}
                />
                <Box
                    display="flex"
                    flexDirection="row"
                    height="620px"
                    width="75%"
                    border={1}
                    borderRadius={5}
                >
                    <NoteList
                        notes={filteredNotes}
                        onSelectNote={this.handleSelectedNote}
                        onNoteDelete={this.handleNoteDelete}
                    />
                    {selectedNote
                        ? <NoteEditor
                            selectedNote={selectedNote!}
                            handleTextChange={this.handleTextChange}
                            showMarkdown={showMarkdown}
                        />
                        : <NoNoteSelected />
                    }
                </Box>
            </>
        );
    }
}

export default NotesApp;