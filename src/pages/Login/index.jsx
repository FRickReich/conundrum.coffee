import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUserAuth } from '../../context/UserAuthContext';

const Login = () =>
{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const { logIn, googleSignIn, githubSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setError('');

        try {
            await logIn(email, password);
            navigate('/dashboard');  
        } catch (err) {
            setError(err.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/dashboard");
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleGithubSignIn = async (e) =>
      {
        e.preventDefault();
        try
        {
            await githubSignIn();
            navigate("/dashboard");
        }
        catch(error)
        {
            console.log(error.message);
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
                <button type='submit'>Log In</button>
                <br />

                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                <button onClick={handleGithubSignIn}>Sign in with github</button>
                <br />

                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </>
    )
}

export default Login;
