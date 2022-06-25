import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { notesStore, NotesStore } from '../../stores';
import { useStorageStore } from './hooks';

export type NotesContextType = NotesStore;

export const NotesContext = React.createContext<NotesContextType>(notesStore);

type NotesProviderProps = {
  store: NotesStore; 
};

export const NotesProvider = observer(({ children, store }: React.PropsWithChildren<NotesProviderProps>) => { 
  const storageStore = useStorageStore();

  useEffect(() => {
    notesStore.init(JSON.parse(storageStore.value));
  }, []);

  useEffect(() => {
    storageStore.setStorage(JSON.stringify(notesStore.notes));
  }, [notesStore.notes]);

  return <NotesContext.Provider value={store}>
    {children}
  </NotesContext.Provider>;
});