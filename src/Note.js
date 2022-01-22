import { MdDeleteForever } from 'react-icons/md';
import './Note.css'

const Note = ({ id, title, text, tags, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div className='note-title'><h3>{title}</h3></div>
			<div classsName='note-text'>{text}</div>
			<div classsName='note-tags'>{tags}</div>
			<div className='note-footer'>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;