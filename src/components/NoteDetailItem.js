
import React from 'react';
import NoteStore from '../data/NoteStore'

class NoteDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: {title: '', summary: '', lastSaved: ''}
    };
  }

  componentDidMount() {
    NoteStore.addListener("noteSelected", this.updateSelectedNote);
  }

  componentWillUnmount() {
    NoteStore.removeListener("noteSelected", this.updateSelectedNote);
  }

  updateSelectedNote = (item) => {
    console.log('NoteDetailItem - update selected note', item);
    this.setState({selectedNote: item.note})
  };
    
  render() {
    console.log('render, state: ', this.state);
    return (
      <article className="note-detail">
        <section className="note-detail-title">
          <h3>{this.state.selectedNote.title}</h3>
          <time>{this.state.selectedNote.lastSaved}</time>
        </section>
        <section>
          <p>{this.state.selectedNote.summary}</p>    
        </section>
      
      </article>
    );
  }
}

export default NoteDetailItem;
