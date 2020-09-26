import React, { useState } from 'react';
import Input from './Input';

function Form() {

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleChange = evt => {
        const { fieldName, value } = evt.target;

        setLoginInfo(prevValue => {
            return {
                ...prevValue,
                [fieldName]: value
            }
        });
    }

    return (
        <div>
            <form className="loginForm">
                <Input onChange={handleChange} type="text" placeholder="Username" name="uName" value={loginInfo.username} />
                <Input onChange={handleChange} type="password" placeholder="Password" name="password" value={loginInfo.password} />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Form;