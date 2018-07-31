import React from 'react';
import NoteList from './NoteList';
import NoteDetailItem from './NoteDetailItem';
import SplitPane from 'react-split-pane';
var api = require('../utils/api.js');


class NoteView extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			repos: api.fetchNotes()
		}
  }

  render() {
    return (
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
    );
  }
}

export default NoteView;
