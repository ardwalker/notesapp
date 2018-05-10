import React from 'react';


function NoteListItem(props) {
  return (
    <li className="list-item" data-index={props.index}>
      <div className="list-item-content">
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
    </li>	
  );
}

export default NoteListItem;