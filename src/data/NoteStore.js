
import {EventEmitter} from "events";
import NoteActionTypes from './NoteActionTypes';
import NoteDispatcher from './NoteDispatcher';

class NoteStore extends EventEmitter {
  constructor() {
    console.log('notestore constructor');
    super(NoteDispatcher);
  }

  getInitialState() {
    return '';
  }

  handleActions(action) {
    switch (action.type) {
      case NoteActionTypes.SELECT_NOTE:
        console.log('Select note');
        console.log(action);
        this.emit('noteSelected', action);
        return action;

      // case TodoActionTypes.UPDATE_DRAFT:
      //   return action.text;

      default:
        return action;
    }
  }
}

const noteStore = new NoteStore();
NoteDispatcher.register(noteStore.handleActions.bind(noteStore));
export default noteStore;


