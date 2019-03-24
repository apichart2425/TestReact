import React, { Component } from 'react';
import '../Css/loginStyle.css';

class Login extends Component {
    const
    render() {
        return (
            <div>
                <div styleName="">
                    <div className="container mt-5 bg-secondary">
                        <img className="logo" alt="Social Vue" src='https://what-is-the-meaning-of.com/wp-content/uploads/2018/02/StockUnlimited_logo.png' />
                        <h1 className="my-3">Welcome</h1>
                        <form>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#" className="text-light">Forgot password?</a>
                            <input type="submit" value="Sign In" />
                        </form>
                        <a href="/" className="textRight">Home</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;