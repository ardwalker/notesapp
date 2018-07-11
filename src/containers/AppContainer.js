
import AppView from '../components/App';
import {Container} from 'flux/utils';
import NoteActions from '../data/NoteActions';
import NoteStore from '../data/NoteStore';

function getStores() {
  return [
    NoteStore,
  ];
}

function getState() {
  return {
    // draft: TodoDraftStore.getState(),
    // editing: TodoEditStore.getState(),
    notes: NoteStore.getState(),
    onSelectNote: NoteActions.selectNote,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
