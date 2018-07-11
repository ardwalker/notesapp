import React from 'react';
import Dispatcher from '../data/NoteDispatcher';
import ActionTypes from '../data/NoteActionTypes';
import NoteContext from '../data/NoteContext';

class NoteListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Alternative click handler using flux. 
  handleClick(e) {
    console.log('NoteListItem component dispatching SELECT_NOTE');
    Dispatcher.dispatch({
      type: ActionTypes.SELECT_NOTE,
      note: this.props.note
    });
  }

  render() {
    return (
      <NoteContext.Consumer>
        {(context) => (          
          <li className="list-item" data-index={this.props.note.index} onClick={() => context.currentNote(this.props.note)}>
            <div className="list-item-content">
              <h3>{this.props.note.title}</h3>
              <p>{this.props.note.summary}</p>
            </div>
          </li>	
        )}

      </NoteContext.Consumer>
    );
  }
}

export default NoteListItem;
