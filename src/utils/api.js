

module.exports = {

  fetchNotes: function() {
    let notes = [];
    
    let note1 = {
      title: 'This is a test note',
      summary: 'This is a summary for the first test note'
    }
    let note2 = {
      title: 'Title',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet.'
    }
    notes.push(note1);
    notes.push(note2);
    return notes;
  }

}


