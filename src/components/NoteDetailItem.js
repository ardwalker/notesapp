
import React from 'react';
import NoteContext from '../data/NoteContext';

// import NoteStore from '../data/NoteStore'

class NoteDetailItem extends React.Component {
  constructor(props) {
    super(props);
  }

    
  render() {
    console.log('render, state: ', this.state);
    return (
      <article className="note-detail">
        <section className="note-detail-title">
          <div>
            <NoteContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <h3>{context.state.note.title}</h3>
                  <time>{context.state.note.lastSaved}</time>
                </React.Fragment>
              )}
            </NoteContext.Consumer>
          </div>
        </section>
        <section>
          <NoteContext.Consumer>
            {(context) => (
              <p>{context.state.note.summary}</p>
            )}
          </NoteContext.Consumer>
        </section>
      
      </article>
    );
  }
}

export default NoteDetailItem;
