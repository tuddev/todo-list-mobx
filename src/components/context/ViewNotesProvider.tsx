import React from 'react';
import { viewNotesStore, ViewNotesStore } from '../../stores/';

export type ViewNotesContextType = ViewNotesStore;

export const ViewNotesContext = React.createContext<ViewNotesContextType>(viewNotesStore);
  
type ViewNotesProviderProps = {
  store: ViewNotesStore; 
};

export function ViewNotesProvider({ children, store }: React.PropsWithChildren<ViewNotesProviderProps>) {
  return <ViewNotesContext.Provider value={store}>
    {children}
  </ViewNotesContext.Provider>;  
}