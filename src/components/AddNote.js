import React from 'react';
import NoteStore from '../data/NoteStore';
import './AddNote.css';


class AddNote extends React.Component {
  constructor() {
    super();
    console.log('addNote constructor');
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    console.log('Handle submit');
    const note = {
      title: "new title",
      summary: "new summary"
    }
    NoteStore.addNote(note);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container'>
          <div className='card__container'>
            <div className='card'>
              <div className="row title">
                  <div className="info">
                      <label htmlFor="title">Title</label>
                      <input placeholder="title of note" id="title" type="text" />
                  </div>
              </div>
              <div className="row summary">
                  <div className="info">
                      <label htmlFor="summary">Summary</label>
                      <input id="summary" type="text" maxLength="255" placeholder="Summary..."/>
                  </div>
              </div>
            </div>
            <div className="button">
                <button type="submit">Add Note</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default AddNote;
