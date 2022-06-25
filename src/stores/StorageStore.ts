import { makeAutoObservable } from 'mobx';

export class StorageStore {
  fieldName = '';

  value = '';

  constructor(fieldName: string) {
    makeAutoObservable(this);

    this.fieldName = fieldName;
    this.setValue(localStorage.getItem(fieldName));
  }

  private setValue (value: string) {
    this.value = value;
  }

  setStorage(newValue: string) {
    localStorage.setItem(this.fieldName, newValue);
    this.value = newValue;
  }
}

export const storageStore = new StorageStore('notes');
