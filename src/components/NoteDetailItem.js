import React from 'react';

class NoteDetailItem extends React.Component {
  render() {
    return (
      <article className="note-detail">
        <section className="note-detail-title">
          <h3>This is a note title</h3>
          <time>2018-05-18T14:54:39Z</time>
        </section>
        <section>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet.</p>    
        </section>
      
      </article>
    );
  }
}

export default NoteDetailItem;