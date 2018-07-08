

import NoteActionTypes from './NoteActionTypes';
import NoteDispatcher from './NoteDispatcher';

const Actions = {
  selectNote(text) {
    console.log('select note action, dispatching');
    NoteDispatcher.dispatch({
      type: NoteActionTypes.SELECT_NOTE,
      text,
    });
  },

  // deleteCompletedTodos() {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.DELETE_COMPLETED_TODOS,
  //   });
  // },
  // 
  // deleteTodo(id) {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.DELETE_TODO,
  //     id,
  //   });
  // },
  // 
  // editTodo(id, text) {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.EDIT_TODO,
  //     id,
  //     text,
  //   });
  // },
  // 
  // startEditingTodo(id) {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.START_EDITING_TODO,
  //     id,
  //   });
  // },
  // 
  // stopEditingTodo() {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.STOP_EDITING_TODO,
  //   });
  // },
  // 
  // toggleAllTodos() {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.TOGGLE_ALL_TODOS,
  //   });
  // },
  // 
  // toggleTodo(id) {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.TOGGLE_TODO,
  //     id,
  //   });
  // },
  // 
  // updateDraft(text) {
  //   TodoDispatcher.dispatch({
  //     type: TodoActionTypes.UPDATE_DRAFT,
  //     text,
  //   });
  // }
};

export default Actions;