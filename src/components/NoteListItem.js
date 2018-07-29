import React from 'react';
import NoteActions from '../data/NoteActions';

class NoteListItem extends React.Component {

  select(note) {
    console.log('NoteListItem::select');
    NoteActions.select(note);
  }

  render() {
    return (
      <li className="list-item" data-index={this.props.index} onClick={() => this.select(this.props.note)}>
        <div className="list-item-content">
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.summary}</p>
        </div>
      </li>	
    )
  }
}

export default NoteListItem;
