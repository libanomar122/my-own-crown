import { useState, useContext } from 'react';
import "./sign-up-form.styles.scss";
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword} from "../../util/firebase/firebase.util";
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            if(error.code == 'auth/email-already-in-use') {
                alert("Email already in use. please login.");
            } else {
                console.error(`Problem creating user: ${error.message}`);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <form className="sign-up-container" onSubmit={handleSubmit}>
            <h1>Sign Up Form</h1>
            <FormInput label="Full Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />
            <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
            <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
            <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
            <Button type='submit'>Submit</Button>
        </form>
    )
}

export default SignUpForm;