import React from 'react';
import { When } from 'react-if';
import { LoginContext } from './context';

export default class Login extends React.Component {
    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.context.loginFunction(this.state.username, this.state.password);
    }
    render() {
        return (
            <>
                <When condition={!this.context.loginStatus}>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" placeholder='username' name='username' onChange={this.changeHandler} />
                        <input type="text" placeholder='password' name='password' onChange={this.changeHandler} />
                        <input type="submit" value='login' />
                    </form>
                </When>
                <When condition={this.context.loginStatus}>
                    <div>
                        {this.context.user.username}
                    </div>
                    <button onClick={this.context.logoutFunction}>Logout</button>
                </When>
            </>
        )
    }
}