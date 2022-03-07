import React from 'react';
import Note from '../Notes/Note/Note';

function PinnedNotes({ noteList }) {
	const pinnedNotes = noteList.filter(note => note.isPinned);
	return (
		<div className="flex-container">
			{pinnedNotes.map(note => (
				<Note key={note.id} note={note} />
			))}
		</div>
	);
}

export default PinnedNotes;
