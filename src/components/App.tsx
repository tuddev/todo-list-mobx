import { Container, Typography } from '@mui/material';
import React from 'react';
import { StorageProvider, NotesProvider, ViewNotesProvider } from './context';
import Footer from './Footer';
import { Form } from './Form';
import NotesList from './NotesList';
import { storageStore } from '../stores';
import { notesStore } from '../stores/NotesStore';
import { viewNotesStore } from '../stores/ViewNotesStore';

const ROOT_CONTAINER_STYLES = { 
  display: 'flex', 
  flexDirection: 'column', 
  margin: '20px auto',
  padding: 2,
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
};

export function App() {
  return (
    <div>
      <StorageProvider store={storageStore}>
        <NotesProvider store={notesStore}>
          <ViewNotesProvider store={viewNotesStore}>
            <Container maxWidth="md" sx={ROOT_CONTAINER_STYLES}>
              <Typography variant='h2' align='center'>Todos</Typography>
              <Form />
              <NotesList />     
              <Footer /> 
            </Container>
          </ViewNotesProvider>
        </NotesProvider> 
      </StorageProvider>
    </div>
  );
}