import React from 'react';
import './note.css';

function Note({ note, setNoteList, noteList }) {
	const { id, title, description, backgroundColor, createdAt, isPinned } = note;

	function togglePin() {
		setNoteList(
			noteList.map(item =>
				item.id === id ? { ...item, isPinned: !item.isPinned } : item
			)
		);
	}
	return (
		<article
			className="card rounded shadow"
			style={{ backgroundColor: backgroundColor }}
		>
			<button
				className="icon-btn"
				onClick={() => togglePin()}
				title="Pin this note"
			>
				<i
					className={`fas fa-map-pin icon text-gray ${isPinned && 'text-red'}`}
				></i>
			</button>
			<div className="card-body">
				<h3 className="text-huge">{title}</h3>
				<p>{description}</p>
				<p className="text-xsm">Last Edited on: {createdAt}</p>
			</div>
		</article>
	);
}

export default Note;
