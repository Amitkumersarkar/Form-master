import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
        }
        else {
            setError('');
            console.log(name, email, password);
        }
        console.log(email);
        console.log(name);
        console.log(password);

    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleChangeName = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeName} type="text" name='Name' placeholder="Enter Your Name" />
                <br />
                <input onChange={handleEmailChange} type="Email" name="Email" placeholder="Enter Your Email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name='Password' />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;