import { makeAutoObservable } from 'mobx';
import { NoteProps } from '../components/note/Note';

export class NotesStore {
  notes: Array<NoteProps> = [];
  
  constructor() {
    makeAutoObservable(this);
  }

  init(initNotes: Array<NoteProps>) {
    this.notes = initNotes;
  }

  addNote(note: NoteProps) {
    this.notes = [note, ...this.notes];
  }

  clearCompletedNotes() {
    const onlyCompletedNotes = this.notes.filter((note) => note.isChecked !== true);

    this.notes = onlyCompletedNotes;
  }

  toggleNoteStatus(id: string) {
    this.notes = this.notes.map((note) => note.id === id ? { ...note, isChecked: !note.isChecked } : note);
  }

  editNote(id: string, newTitle: string) {
    this.notes = this.notes.map((note) => note.id === id ? { ...note, title: newTitle } : note);
  } 

  deleteNote(id: string) {
    const newNotes = this.notes.filter((note) => note.id !== id);

    this.notes = newNotes;
  }
}

export const notesStore = new NotesStore();

