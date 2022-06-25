import { Grid, IconButton } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

type NoteSecondActionsProps = {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setValue: (value: string) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, newTitle: string) => void;
  value: string;
  id: string
};

export function NoteSecondActions({ 
  isEdit, setIsEdit, deleteNote, editNote, setValue, value, id,
}: NoteSecondActionsProps) {
  const handleEdit = function(event: SyntheticEvent) {
    event.stopPropagation();
    setIsEdit(!isEdit);
    setValue(value);
  }; 

  const handleDelete = function(event: SyntheticEvent) {
    event.stopPropagation();
    deleteNote(id);
  }; 

  const handleEditDone = function() {
    setIsEdit(false);
    editNote(id, value);
  };

  const handleEditCancel = function() {
    setIsEdit(false);
  };
  
  return <Grid container spacing={2}>
    <Grid item>
      <IconButton 
        onClick={!isEdit ? handleEdit : handleEditDone} 
        edge="end" 
        aria-label="edit"
      >
        {!isEdit ? <EditIcon /> : <DoneIcon/>}
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton onClick={!isEdit ? handleDelete : handleEditCancel} edge="end" aria-label="delete">
        {!isEdit ? <DeleteIcon /> : <CancelIcon/>}
      </IconButton>
    </Grid>
  </Grid>;
}