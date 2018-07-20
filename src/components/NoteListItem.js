import React from 'react';
import Dispatcher from '../data/NoteDispatcher';
import ActionTypes from '../data/NoteActionTypes';
import NoteContext from '../data/NoteContext';

class NoteListItem extends React.Component {

  render() {
    return (
      <NoteContext.Consumer>
  
        {(context) => (          
          <li className="list-item" data-index={this.props.index} onClick={() => context.currentNote(this.props.note)}>
            <div className="list-item-content">
              <h3>{this.props.note.title}</h3>
              <p>{this.props.note.summary}</p>
            </div>
          </li>	
        )}
  
      </NoteContext.Consumer>
    )
  }
}

export default NoteListItem;
