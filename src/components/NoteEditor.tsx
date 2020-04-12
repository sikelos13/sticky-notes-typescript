import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import { Note } from '../types';
import ReactMarkdown from 'react-markdown';

interface EditorProps {
    selectedNote: Note;
    showMarkdown: boolean;
    handleTextChange: (event: any) => void;
}

const NoteEditor: React.FC<EditorProps> = memo(({ selectedNote, showMarkdown, handleTextChange }: EditorProps) => (
    <Box
        width="75%"
        border={1}
        display="flex"
        justifyContent="center"
        className="note-editor-container"
    >
        <div className="note-editor">
            <Box height="100%">
                <input
                    name="title"
                    placeholder="Enter your note title here..."
                    className="textarea input-editor"
                    id="title"
                    value={selectedNote.title}
                    onChange={handleTextChange}
                />
                {showMarkdown
                    ? <ReactMarkdown
                        className="markdown-editor"
                        source={selectedNote.text}
                    />
                    : <textarea
                        placeholder="Enter your note here..."
                        rows={5}
                        className="textarea plain-editor"
                        name="text"
                        value={selectedNote.text}
                        onChange={handleTextChange}
                    />
                }
            </Box>
        </div>
    </Box>
));

export default NoteEditor;


