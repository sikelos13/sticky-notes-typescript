import React from 'react';
import Box from '@material-ui/core/Box';

const NoNoteSelected: React.FC = () => (
    <Box
        width="75%"
        border={1}
        display="flex"
        justifyContent="center"
        className="note-editor-container"
    >
        <div className="note-editor-disabled">
            <Box height="100%" p="0 70px">
                <h2>Select a note to see its details or create one</h2>
            </Box>
        </div>
    </Box>
);

export default NoNoteSelected;


