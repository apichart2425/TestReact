import React, { Component } from 'react';

class Screen extends Component {
    constructor() {
        super();
        this.state = {
            name: "Unlike",
            like: 0,
            count: 0,
        }
    }
    render() {
        return (
            <div>
                <p>state</p>
                <h2>{this.state.name}</h2>
                {/* <h2>{this.state.count}</h2> */}
            </div>
        )
    }
}

export default Screen;