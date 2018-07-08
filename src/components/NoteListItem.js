import React from 'react';
import Dispatcher from '../data/NoteDispatcher';
import ActionTypes from '../data/NoteActionTypes';

class NoteListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('NoteListItem component dispatching SELECT_NOTE');
    Dispatcher.dispatch({
      type: ActionTypes.SELECT_NOTE,
      note: this.props.note
    });
  }

  render() {
    return (
      <li className="list-item" data-index={this.props.index} onClick={this.handleClick}>
        <div className="list-item-content">
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.summary}</p>
        </div>
      </li>	
    );
  }
}

export default NoteListItem;