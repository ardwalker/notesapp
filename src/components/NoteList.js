
import React from 'react';
import NoteListItem from './NoteListItem';
import NoteStore from '../data/NoteStore';

class NoteList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: NoteStore.allNotes()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          All Notes
        </div>
        <ul>
          {
            this.state.notes.map( (note, i) => {
              return (
                <NoteListItem note={note} index={i} key={i}/>
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default NoteList;
