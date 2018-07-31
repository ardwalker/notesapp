
import React from 'react';
// import NoteList from './NoteList';
// import NoteDetailItem from './NoteDetailItem';
import NoteView from './NoteView';
import AddNote from './AddNote';
// import SplitPane from 'react-split-pane';
import { Route } from 'react-router-dom';

import '../App.css';

var api = require('../utils/api.js');


class App extends React.Component {

  constructor(props) {
		super(props);
    console.log('App constructor');
		this.state = {
			repos: api.fetchNotes()
		}
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title"><span>Notes App</span></h1>
        </header>

        <Route path="/" exact component={NoteView}/>
        <Route path="/add-note" component={AddNote}/>
                  
      </div>
    );
  }
}

export default App;
