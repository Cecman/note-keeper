import React, { useState } from 'react';
import Input from './Input';

function Form(props) {

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });

    const [isUser, setIsUser] = useState(true);

    const handleChange = evt => {
        const { fieldName, value } = evt.target;

        setLoginInfo(prevValue => {
            return {
                ...prevValue,
                [fieldName]: value
            }
        });
    }

    const handleClick = () => {
        if (isUser) {
            setIsUser(false);
        } else {
            setIsUser(true);
        }
    }


    return (
        <div>
            <form className="loginForm">
                <Input onChange={handleChange} type="text" placeholder="Username" name="username" value={loginInfo.username} />
                {!props.isLoggedIn && !isUser ? <Input onChange={handleChange} type="text" placeholder="Email" name="email" /> : null}
                <Input onChange={handleChange} type="password" placeholder="Password" name="password" value={loginInfo.password} />
                {!props.isLoggedIn && !isUser ? <Input onChange={handleChange} type="text" placeholder="Confirm Password" name="confPas" /> : null}
                <button>{isUser ? "Login" : "Signup"}</button>
                <p className="sign-up-par" onClick={handleClick}>{isUser ? "Not a user? Sign up here!" : "Already have account? Login!"}</p>
            </form>
        </div>
    );
}

export default Form;