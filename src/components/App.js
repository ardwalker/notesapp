
import React from 'react';
import NoteListItem from './NoteListItem';
import NoteDetailItem from './NoteDetailItem';
// import NoteService from './NoteService';
import '../App.css';

var api = require('../utils/api.js');

class App extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
			repos: api.fetchNotes()
		}
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Notes</h1>
        </header>

        <div className="container">

          <div className="box note-list-container">
            <ul>
              {
                this.state.repos.map( (note, i) => {
                  return (
                    <NoteListItem title={note.title} summary={note.summary} index={i} key={i}/>
                  )
                })
              }
            </ul>
          </div>

          <div className="box note-detail-container">
              <NoteDetailItem/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
