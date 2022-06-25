import React from 'react';
import List from '@mui/material/List';
import { Note } from './note';
import { useViewNotesStore } from './context/hooks';
import { observer } from 'mobx-react';

const CUSTOM_LIST_STYLES = { width: '100%', bgcolor: 'background.paper' };

function NotesList() {
  const viewNotesStore = useViewNotesStore();

  return (
    <List sx={CUSTOM_LIST_STYLES}>
      {
        viewNotesStore.filteredNotes.map((value) => {
          return <Note 
            key={value.id} 
            id={value.id} 
            isChecked={value.isChecked} 
            title={value.title}
          />;
        })
      }
    </List>
  );
}

export default observer(NotesList);