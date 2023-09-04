import React from 'react';
import { useState, useContext } from 'react';
import "./sign-in-form.styles.scss";
import {createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../util/firebase/firebase.util";
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../contexts/user.context';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'user/wrong-password':
                    alert('Wrong password entered')
                    break;
                case 'auth/user-not-found':
                    alert('Wrong password entered')
                    break;
                default:
                    console.error(error);
            }
            console.log(error.message);
        } 
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = async() => {
        try {
          await signInWithGooglePopup();
        } catch(error) {
          console.error(error.message);
        }
      }

    return (
        <form className="sign-in-container" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
            <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
            <div className='buttons-container'>
                <Button type='submit' onClick={handleSubmit}>Sign In</Button>
                <Button type="button" buttonType='google' onClick={signInWithGoogle}> Sign in with Google </Button>
            </div>
        </form>
    )
}

export default SignInForm;