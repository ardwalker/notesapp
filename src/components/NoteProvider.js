
import React from 'react';
import NoteContext from '../data/NoteContext';

class NoteProvider extends React.Component {
  state = {
    note: {title: '', summary: '', lastSaved: ''},
  }
  
  currentNote(n) {
    this.setState({note: n})
  }

  render() {
    console.log('NoteProvider.render');
    return (
      <NoteContext.Provider value={{ 
          state: this.state,
          currentNote: (n) => this.currentNote(n)
        }}>
        {this.props.children}
      </NoteContext.Provider>      
    )
  }
}

export default NoteProvider;

