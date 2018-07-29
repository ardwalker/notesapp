
import React from 'react';
//import NoteContext from '../data/NoteContext';
import NoteStore from '../data/NoteStore';
import NoteActionTypes from '../data/NoteActionTypes';

class NoteDetailItem extends React.Component {
  constructor() {
    super();
    this.state = {
      note: { title: 'Title', summary: 'Summary', lastSaved: '' }
    }
  }
  
  componentDidMount() { 
    console.log('NoteDetailItem::componentDidMount');
    NoteStore.addEventListener(NoteActionTypes.SELECT_NOTE, this.noteChanged); 
  }
  
  componentWillUnmount() { 
    console.log('NoteDetailItem::componentWillUnmount');
    NoteStore.removeEventListener(NoteActionTypes.SELECT_NOTE, this.noteChanged); 
  }
    
  noteChanged = () => {
    console.log('NoteDetailItem::noteChanged');
    this.setState({ note: NoteStore.getNote() }); 
  }
    
  render() {
    console.log('NoteDetailItem::render');
    
    return (
      <article className="note-detail">
        <section className="note-detail-title">
          <h3>{this.state.note.title}</h3>
          <time>{this.state.note.lastSaved}</time>
        </section>
        <section>
          <p>{this.state.note.summary}</p>
        </section>
      </article>
    );

  }
}

export default NoteDetailItem;
