
import React from 'react';
import NoteList from './NoteList';
import NoteDetailItem from './NoteDetailItem';
import SplitPane from 'react-split-pane';
import NoteProvider from './NoteProvider';

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
      <NoteProvider>
        <div className="App">

            <header className="app-header">
              <h1 className="app-title">Notes</h1>
            </header>

            <section className="container">
              
              <SplitPane split="vertical" minSize={150} defaultSize={300} primary='first'>
                
                <div className="box note-list-container">
                  <NoteList />
                </div>

                <div className="box note-detail-container">
                  <NoteDetailItem />
                </div>

              </SplitPane>

            </section>         
            
        </div>
      </NoteProvider>
    );
  }
}

export default App;
