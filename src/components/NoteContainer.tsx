import React from 'react';
import { Box } from '@material-ui/core';

interface NoteContainerProps {
  active: boolean;
  title: string;
  onDelete: () => void;
  onSelect: () => void;
}

const NoteContainer: React.FC<NoteContainerProps> = ({ onDelete, onSelect, active, title }: NoteContainerProps) => (
  <Box display="flex">
    <span className="delete-note" onClick={onDelete}> × </span>
    <div className={active ? "note note-active" : "note"} onClick={onSelect}>
      {title}
    </div>
  </Box>
);

export default NoteContainer;