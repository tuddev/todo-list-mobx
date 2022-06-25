import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { FilterType } from '../types';
import { useNotesStore, useViewNotesStore } from './context/hooks';
import { observer } from 'mobx-react';

const FOOTER_STYLES = { display: 'flex', justifyContent: 'space-between' };

function Footer() {
  const viewNotesStore = useViewNotesStore();  
  const notesStore = useNotesStore();

  const handleActiveClick = () => viewNotesStore.filterOnlyActive();
  const handleAllClick = () => viewNotesStore.filterAll();
  const handleCompletedClick = () => viewNotesStore.filterOnlyCompleted();

  const handleClearAllCompleted = () => notesStore.clearCompletedNotes();

  return (
    <Container maxWidth="md" sx={FOOTER_STYLES}>
      <Typography>{viewNotesStore.filteredNotes.length} notes</Typography>
      <ButtonGroup variant="outlined">
        <Button 
          variant={viewNotesStore.activeFilter === FilterType.ALL ? 'contained' : undefined} 
          onClick={handleAllClick}
        >
          All
        </Button>
        <Button 
          variant={viewNotesStore.activeFilter === FilterType.ACTIVE ? 'contained' : undefined} 
          onClick={handleActiveClick}
        >
          Active
        </Button>
        <Button 
          variant={viewNotesStore.activeFilter === FilterType.COMPLETED ? 'contained' : undefined} 
          onClick={handleCompletedClick}
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClearAllCompleted}>
        Clear completed
      </Button>
    </Container>
  );
}

export default observer(Footer);