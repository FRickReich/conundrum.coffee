import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUserAuth } from './../../context/UserAuthContext';

const SignUp = () =>
{
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState('');
    const [ password, setPassword] = useState('');

    const { signUp } = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        
        setError('');

        try
        {
            await signUp(email, password);
            navigate('/');
        }
        catch(err)
        {
            setError(err.message);
        }
    }

    return(
        <>
            { error && <div style={{ color: 'red'}}>{error}</div> }
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='email address'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type='submit'>Sign Up</button>
                <br />
                <p>Already have an account? <Link to="/">Log In</Link></p>
            </form>
        </>
    )
}

export default SignUp;
