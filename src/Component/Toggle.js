import React, { Component } from 'react'

export default class Toggle extends Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
      
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
      render() {
        return (
            <>
            <h1>Hello ,World!</h1>
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
             </button>
            </>
        );
      }
    }
