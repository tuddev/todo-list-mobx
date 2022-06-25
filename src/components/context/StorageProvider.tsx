import React from 'react';
import { storageStore, StorageStore } from '../../stores';

export type StorageContextType = StorageStore;

export const StorageContext = React.createContext<StorageStore>(storageStore);

type StorageProviderProps = {
  store: StorageStore; 
};

export function StorageProvider({ children, store }: React.PropsWithChildren<StorageProviderProps>) {
  return <StorageContext.Provider value={store}>
    {children}
  </StorageContext.Provider>;
}


