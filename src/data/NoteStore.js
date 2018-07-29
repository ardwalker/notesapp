
import NoteActionTypes from './NoteActionTypes';
import NoteDispatcher from './NoteDispatcher';
import {EventEmitter} from 'events';

class NoteStore extends EventEmitter {
  constructor() {
    super(NoteDispatcher);
    this.dispatchToken = NoteDispatcher.register(this.dispatcherCallback.bind(this));
  }

  onSelectNote(note) {
    console.log('NoteStore::onSelectNote');
    this.note = note; 
  }
  
  getNote() {
    return this.note;
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




