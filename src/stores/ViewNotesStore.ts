import { makeAutoObservable } from 'mobx';
import { FilterType } from '../types';
import { notesStore } from './NotesStore';

export class ViewNotesStore {
  activeFilter:FilterType = FilterType.ALL;

  constructor() {
    makeAutoObservable(this);
  }

  get notes() {
    return notesStore.notes;
  } 
 
  get filteredNotes() {
    switch (this.activeFilter) {
      case FilterType.ACTIVE: {
        return this.notes.filter((note) => note.isChecked !== true);
      }
      case FilterType.COMPLETED: {
        return this.notes.filter((note) => note.isChecked === true);
      }
      default: {
        return this.notes;
      }
    }
  }

  filterOnlyCompleted() {
    this.activeFilter = FilterType.COMPLETED;
  }

  filterOnlyActive() {
    this.activeFilter = FilterType.ACTIVE;
  }

  filterAll() {
    this.activeFilter = FilterType.ALL;
  }
}

export const viewNotesStore = new ViewNotesStore();
