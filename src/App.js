import { useState } from 'react';
import './App.css';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import PinnedNotes from './components/PinnedNotes/PinnedNotes';
import notesList from './database/notes-db';

function App() {
	const initialFormData = {
		title: '',
		description: '',
		backgroundColor: '#ffffff'
	};
	const [noteList, setNoteList] = useState(notesList);
	const [noteDetails, setNoteDetails] = useState(initialFormData);
	return (
		<div className="App flex-column flex-container">
			<h1>Create Notes</h1>
			<NewNote
				setNoteList={setNoteList}
				noteList={noteList}
				noteDetails={noteDetails}
				setNoteDetails={setNoteDetails}
			/>
			<h1>Pinned Notes</h1>
			<PinnedNotes noteList={noteList} setNoteList={setNoteList} />
			<h1>All Notes</h1>
			<Notes noteList={noteList} setNoteList={setNoteList} />
		</div>
	);
}

export default App;
