import { useState } from 'react';
import './AddNote.css'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 1000;
	const [noteTitle, setNoteTitle] = useState('');
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleTitle = (event) => {
		setNoteTitle(event.target.value);
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText, noteTitle, tags);
			setNoteText('');
		}
	};

	//tags
	const [tags, setTags] = useState(["reminder", "monday"]);
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };
	const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

	return (
		<div className='new-note'>
			<h2>Add A New Note</h2>
			<textarea 
				rows='1'
				cols='40'
				placeholder='Title...'
				onChange={handleTitle}
				value={noteTitle}
				></textarea>
				<br></br>
			<textarea
				rows='8'
				cols='40'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<br></br>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Charcters Remaining
				</small>
				<br></br>
			<div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}
				<div>Type a new tag and press enter</div>
        <input onKeyDown={addTag} />
      </div>
				<br></br>
				<br></br>
				<button className='save' onClick={handleSaveClick}>
					Save New Note
				</button>
			</div>
		</div>
	);
};

export default AddNote;