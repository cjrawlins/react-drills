import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: "blank user",
            password: "blank pass"
        };

        // this.usernameInput.bind(this);
        // this.passwordInput.bind(this);
        this.buttonClickAlert = this.buttonClickAlert.bind(this);
    }

    usernameInput(user) {
        this.setState({username: user});
    }
    
    passwordInput(pass) {
        this.setState({password: pass});
    }

    buttonClickAlert() {
        alert(`Username:  ${this.state.username}\nPassword: ${this.state.password}.`);
    }

    render() {
        return (
            <div>
                <input
                    onChange={ e => this.usernameInput(e.target.value)} type="text"
                />
                <input
                    onChange={ e => this.passwordInput(e.target.value)} type="text"
                />
                <button onClick={this.buttonClickAlert}>Login</button>
            </div>
        );
    }


}

export default Login;
