import React from 'react'
import Box from '@material-ui/core/Box';
import { Button, Input } from '@material-ui/core';

interface HeaderProps {
    handleNoteAdd: () => void;
    handleSearch: (event: any) => void;
    handleShowMarkdown: () => void;
    markdownButtonText: string;
}

const Header: React.FC<HeaderProps> = ({ markdownButtonText, handleShowMarkdown, handleNoteAdd, handleSearch }: HeaderProps) => (
    <Box
        border={1}
        className="box-header"
        height="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="baseline"
        width="75%"
        mt={10}
    >
        <Box
            mt={3}
            display="flex"
            justifyContent="center"
        >
            <Button
                variant="contained"
                className="add-button"
                size="small"
                color="primary"
                onClick={handleNoteAdd}
            >
                Add note
            </Button>
        </Box>
        <Box>
            <Input placeholder="Search notes..." onChange={handleSearch} />
        </Box>
        <Box>
            <Button
                variant="contained"
                className="show-markdown"
                size="small"
                color="primary"
                onClick={handleShowMarkdown}
            >
                {markdownButtonText}
            </Button>
        </Box>
    </Box>
)


export default Header