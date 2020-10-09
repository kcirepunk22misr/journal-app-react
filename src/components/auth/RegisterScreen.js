import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	// const state = useSelector((state) => state);

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		dispatch(startRegisterWithEmailPasswordName(email, password, name));
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={handleRegister}>
				<div className='alert__alert-error'>hola</div>

				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='email'
					value={email}
					onChange={handleInputChange}
					name='email'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm Password'
					name='password2'
					value={password2}
					onChange={handleInputChange}
				/>
				<button className='btn btn-primary mb-5 btn-block' type='submit'>
					Register
				</button>

				<Link className='link' to='/auth/login'>
					Already registered *
				</Link>
			</form>
		</>
	);
};
