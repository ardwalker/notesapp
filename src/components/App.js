
import React from 'react';
import NoteListItem from './NoteListItem';
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

            <header className="App-header">
              <h1 className="App-title">Notes</h1>
            </header>

            <div className="container">

              <SplitPane split="vertical" minSize={150} defaultSize={300} primary='first'>
                <div className="box note-list-container">
                  <div>
                    All Notes
                  </div>
                  <ul>
                    {
                      this.state.repos.map( (note, i) => {
                        return (
                          <NoteListItem note={note} index={i} key={i}/>
                        )
                      })
                    }
                  </ul>
                </div>

                <div className="box note-detail-container">
                  <NoteDetailItem />
                </div>

              </SplitPane>

            </div>         
            
        </div>
      </NoteProvider>
    );
  }
}

export default App;
