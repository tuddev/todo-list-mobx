import React from 'react';
import { NotesContext } from '../NotesProvider';
import { StorageContext } from '../StorageProvider';
import { ViewNotesContext } from '../ViewNotesProvider';

export const useStorageStore = () => React.useContext(StorageContext);

export const useNotesStore = () => React.useContext(NotesContext);

export const useViewNotesStore = () => React.useContext(ViewNotesContext);