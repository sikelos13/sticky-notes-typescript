import { Note } from "./types";

// Update list when change text 
export const getUpdatedListOnChangeText = (itemList: any, event: any, selectedNote?: Note) => {
    const updatedList = itemList.map((item: Note) => {
        if (item.id === selectedNote!.id) {
            const updatedNote = {
                ...selectedNote,
                [event.target.name]: event.target.value,
                active: true
            }
            return updatedNote;
        }
        return item;
    });
    return updatedList;
}

// Update list when selecting a note
export const getUpdatedListOnSelect = (itemList: Note[], note: Note) => {
    const updatedList = itemList.map((item: Note) => {
        if (item.id === note.id) {
            const updatedNote = {
                ...note,
                active: true
            }
            return updatedNote;
        } else {
            const updatedNote = {
                ...item,
                active: false
            }
            return updatedNote;
        }
    });
    return updatedList;
}

// Update list on Delete
export const getUpdatedListOnDelete = (itemList: any, noteId: number) => {
    const updatedList = itemList.filter((note: Note) => {
        return note.id !== noteId;
    });
    return updatedList;
}

//fetch notes from local storage

export const fetchNotes = (itemList: any) => {

    const updatedNotesList = itemList.map((item: Note) => {
        const updatedNote = {
            ...item,
            active: false
        }
        return updatedNote;
    });
    
    return updatedNotesList;
}