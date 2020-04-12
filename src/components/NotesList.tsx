import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import NoteContainer from './NoteContainer';
import { Note } from '../types';


interface NotesListProps {
    notes: Note[]
    onNoteDelete: (note: Note) => void;
    onSelectNote: (note: Note) => void;
}

const NoteList: React.FC<NotesListProps> = memo(({ notes, onNoteDelete, onSelectNote }: NotesListProps) => (
    <Box width="50%" border={1} className="noteslist-container">
        <Box
            mt={2}
            display="flex"
            overflow="auto"
            maxHeight="600px"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            {
                notes.map((note: Note) => {
                    return (
                        <NoteContainer
                            key={note.id}
                            title={note.title}
                            active={note.active!}
                            onDelete={onNoteDelete.bind(null, note)}
                            onSelect={onSelectNote.bind(null, note)}
                        >
                            {note.text}
                        </NoteContainer>
                    );
                })
            }
        </Box>
    </Box>
));

export default NoteList;