import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from '../journal/NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activateNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title, id } = formValues;
	const activeId = useRef(note.id);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(activateNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	const handleDelete = () => {
		dispatch(startDeleting(id));
	};

	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					value={title}
					name='title'
					onChange={handleInputChange}
				/>
				<textarea
					className='notes__textarea'
					placeholder='What happend today'
					name='body'
					value={body}
					onChange={handleInputChange}></textarea>
				{note.url && (
					<div className='notes__image'>
						<img src={note.url} alt='hol' />
					</div>
				)}
			</div>

			<button onClick={handleDelete} className='btn btn-danger'>
				Delete
			</button>
		</div>
	);
};
