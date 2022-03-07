import React from 'react';
import { v4 as uuid } from 'uuid';

function NewNote({ setNoteList, noteList, noteDetails, setNoteDetails }) {
	const initialFormData = {
		title: '',
		description: '',
		backgroundColor: '#ffffff'
	};

	function addNote(e) {
		e.preventDefault();
		setNoteDetails(initialFormData);
		setNoteList([
			...noteList,
			{
				...noteDetails,
				id: uuid(),
				createdAt: new Date().toLocaleString(),
				isPinned: false
			}
		]);
	}
	function handleDataChange(e) {
		setNoteDetails({
			...noteDetails,
			[e.target.name]: e.target.value
		});
	}
	return (
		<form className="card border" onSubmit={addNote}>
			<div className="card-body">
				<label htmlFor="title"> Title </label>
				<div>
					<input
						type="text"
						name="title"
						className="input"
						placeholder="Awesome Title"
						value={noteDetails.title}
						onChange={handleDataChange}
						required
					/>
				</div>
				<label htmlFor="description"> Description </label>
				<div>
					<textarea
						type="text"
						name="description"
						className="input"
						placeholder="Awesome description"
						value={noteDetails.description}
						onChange={handleDataChange}
						required
					/>
				</div>
				<label htmlFor="background-color"> Pick a Background Color </label>
				<div>
					<input
						type="color"
						name="backgroundColor"
						className="input"
						value={noteDetails.backgroundColor}
						onChange={handleDataChange}
					/>
				</div>
				<button className="btn bg-blue">Add New</button>
			</div>
		</form>
	);
}

export default NewNote;
