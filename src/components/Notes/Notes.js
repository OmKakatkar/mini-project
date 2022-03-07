import React from 'react';
import Note from './Note/Note';

function Notes({ noteList, setNoteList }) {
	return (
		<div className="flex-container">
			{noteList.map(note => (
				<Note
					key={note.id}
					note={note}
					noteList={noteList}
					setNoteList={setNoteList}
				/>
			))}
		</div>
	);
}

export default Notes;
