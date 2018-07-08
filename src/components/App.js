
import React from 'react';
import NoteListItem from './NoteListItem';
import NoteDetailItem from './NoteDetailItem';
import SplitPane from 'react-split-pane';
// import NoteService from './NoteService';
import '../App.css';

var api = require('../utils/api.js');


// function App(props) {
//   return (
//     <div className="container">
// 
//       <SplitPane split="vertical" minSize={150} defaultSize={300} primary='first'>
//         <div className="box note-list-container">
//           <div>
//             All Notes
//           </div>
//           <ul>
//             {
//               // this.state.repos.map( (note, i) => {
//                 // return (
//                   <NoteListItem title='Note title' summary='This is a test note summary' index='1' key='1'/>
//                 // )
//               // })
//             }
//           </ul>
//         </div>
// 
//         <div className="box note-detail-container">
//           <NoteDetailItem/>
//         </div>
//       </SplitPane>
// 
//     </div>  
//   );
// }


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
                <NoteDetailItem/>
            </div>
          </SplitPane>

        </div>
      </div>
    );
  }
}

export default App;
