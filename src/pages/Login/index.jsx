import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Button } from './../../components';

import { useUserAuth } from '../../context/';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { logIn, githubSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await logIn(email, password);
            navigate('/projects');
        } catch (err) {
            setError(err.message);
        }
    }

    const handleGithubSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await githubSignIn();

            console.log(user);

            navigate(`/${ user }`);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {error && <div style={{ color: 'red' }}>{error}</div>}
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
                <Button type="submit" success>Login</Button>
                <br />
                <Button
                    className="button-github"
                    icon={<FontAwesomeIcon icon={faGithub} />}
                    onClick={handleGithubSignIn}
                >Sign in with github</Button>
                <br />

                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </>
    )
}

export default Login;
