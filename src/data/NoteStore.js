
import NoteActionTypes from './NoteActionTypes';
import NoteDispatcher from './NoteDispatcher';
import api from '../utils/api';
import {EventEmitter} from 'events';

class NoteStore extends EventEmitter {
  constructor() {
    super(NoteDispatcher);
    console.log('NoteStore constructor');
    this.state = {
      noteList: api.fetchNotes()
    }
    this.dispatchToken = NoteDispatcher.register(this.dispatcherCallback.bind(this));
  }

  onSelectNote(note) {
    console.log('NoteStore::onSelectNote');
    this.note = note; 
  }
  
  addNote(note) {
    console.log('NoteStore::addNote');
    this.state.noteList.push(note);
  }
  
  getNote() {
    return this.note;
  }  
  
  allNotes() {
    return this.state.noteList; //api.fetchNotes();
  }

  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }

  removeEventListener(eventName, callback) {
    this.removeListener(eventName, callback);
  }

  dispatcherCallback(action) {
    switch (action.type) {
      case NoteActionTypes.SELECT_NOTE: {
        this.onSelectNote(action.note);
        break;
      }
      default:
        break;
    }
    this.emit(action.type);
    return true;
  }  

}

export default new NoteStore();




