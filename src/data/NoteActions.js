

import NoteActionTypes from './NoteActionTypes';
import NoteDispatcher from './NoteDispatcher';

class NoteActions {
  select(note) {
    console.log('NoteActions::select; dispatching SELECT_NOTE event');
    NoteDispatcher.dispatch({type: NoteActionTypes.SELECT_NOTE,note: note});
  }
};

export default new NoteActions();