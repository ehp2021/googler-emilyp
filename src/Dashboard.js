import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import NoteList from "./NoteList"
import { nanoid } from 'nanoid'
import './Dashboard.css'

export default function Dashboard() {
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
      title: 'Note #1',
			text: 'This is my first note!',
		},
		{
			id: nanoid(),
      title: 'Note #2',
			text: 'This is my second note!',
		}
	]);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text, title) => {
		const newNote = {
			id: nanoid(),
      title: title,
			text: text,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className='notes-app-container'>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <h1 className="notes-app-name">My Notes App</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className='current-user'>Welcome, {currentUser.email}!  
						<Button variant="link" onClick={handleLogout}>
							Log Out
						</Button>	
					</div> 
					<br></br>
        </Card.Body>
      </Card>

      <div className='container'>
				<NoteList
					notes={notes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>

    </div>
  )
}