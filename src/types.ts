export interface Note {
    id: number;
    title: string;
    text: string;
    active?: boolean;
}

export interface NotesAppState {
    notes: Note[];
    showMarkdown: boolean;
    markdownButtonText: string;
    filteredNotes: Note[];
    selectedNote?: Note;
    searchValue: string;
}
