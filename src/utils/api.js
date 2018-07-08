

module.exports = {

  fetchNotes: function() {
    let notes = [];
    
    let note1 = {
      title: 'This is a test note',
      summary: 'This is a summary for the first test note',
      lastSaved: '2018-05-18T14:54:39Z'
    }
    let note2 = {
      title: 'Title',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet.',
      lastSaved: '2018-03-13T14:03:98Z'
    }

    let note3 = {
      title: 'Todo items',
      summary: 'Urgent things to do today.',
      lastSaved: '2018-05-10T09:33:57Z'
    }

    notes.push(note1);
    notes.push(note2);
    notes.push(note3);
    return notes;
  }

}


