import { ListItem, ListItemButton, Checkbox, ListItemText, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNotesStore } from '../context/hooks';
import { NoteSecondActions } from './NoteSecondActions';

export type NoteProps = {
  id: string;
  isChecked: boolean;
  title: string;
};

const STROKED_TEXT_STYLES = { textDecoration: 'line-through' };

export function Note({ id, isChecked, title }: NoteProps) {
  const [isCurrentChecked, setIsCurrentChecked] = useState(isChecked);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const notesStore = useNotesStore();

  const handleDeleteNote = (idNote: string) => () => notesStore.deleteNote(idNote);
  const handleEditNote = (idNote: string, valueNote: string) => () => notesStore.editNote(idNote, valueNote);

  const handleToggleCheck = () => {
    setIsCurrentChecked(!isCurrentChecked);
    notesStore.toggleNoteStatus(id);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsEdit(!isEdit);
      setValue(value);
      handleEditNote(id, value)();
    }
  };

  return <ListItem
    disablePadding
    onClick={!isEdit ? handleToggleCheck : () => void 0}
    secondaryAction={<NoteSecondActions
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      setValue={setValue}
      deleteNote={handleDeleteNote(id)}
      editNote={handleEditNote(id, value)}
      value={value}
      id={id}
    />}
  >
    <ListItemButton disableRipple={isEdit} dense>
      <Checkbox
        edge="start"
        tabIndex={-1}
        checked={isCurrentChecked}
        disableRipple
      />
      {
        !isEdit ? <ListItemText 
          sx={isCurrentChecked ? STROKED_TEXT_STYLES : undefined } 
          primary={title} 
        /> : <TextField 
          size="small"
          autoFocus 
          value={value} 
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
        />
      }
    </ListItemButton>
  </ListItem>;
}