import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
        <div >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {/* <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a> */}
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/login" className="nav-item nav-link active">login</Link>
                            <Link to="/profile" className="nav-item nav-link active">Profile</Link>
                            <Link to="/customer" className="nav-item nav-link active">Customer</Link>
                            <Link to="/product" className="nav-item nav-link active">Product</Link>

                            {/* <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                    <div class="navbar-nav">
                        <span class="navbar-text">{this.props.tact}</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
