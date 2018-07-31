
import React from 'react';
import NoteListItem from './NoteListItem';
import NoteStore from '../data/NoteStore';

class NoteList extends React.Component {
  constructor() {
    super();
    console.log('NoteList constructor');
    this.state = {
      notes: NoteStore.allNotes()
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            <span>All Notes</span>
          </h1>
          <a href='/add-note'><span>Add Note</span></a>
        </div>
        <ul>
          {
            NoteStore.allNotes().map( (note, i) => {
              return (
                <NoteListItem note={note} index={i} key={i}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default NoteList;
