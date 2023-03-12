import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components';

import { useUserAuth } from './../../context/UserAuthContext';

const SignUp = () =>
{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError ] = useState('');

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
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button type="submit" success>Sign Up</Button>
                <br />
                <p>Already have an account? <Link to="/">Log In</Link></p>
            </form>
        </>
    )
}

export default SignUp;
