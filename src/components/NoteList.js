
import React from 'react';
import NoteListItem from './NoteListItem'
import NoteContext from '../data/NoteContext'

class NoteList extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          All Notes
        </div>
        <ul>
          <NoteContext.Consumer>
             {(context) => (    
              context.state.noteList.map( (note, i) => {
                return (
                  <NoteListItem note={note} index={i} key={i}/>
                )
              })
            )}
          </NoteContext.Consumer>
        </ul>
      </React.Fragment>
    )
  }
}

export default NoteList;
