import React, { Component } from 'react'


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleAddChange = this.handleAddChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handlePhoneChange(event) {
       this.setState({phone: event.target.value});
    }

    handleAddChange(event) {
        this.setState({add: event.target.value});
    }
    
  
      handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.name+ 'An email was submitted: ' + this.state.email+ 'Your age: ' +this.state.age+ 'Your P.Number: ' +this.state.pphone+ 'Your Address: ' +this.state.add);
     
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label> Name:</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <label> Age:</label>
          <input type="text" value={this.state.age} onChange={this.handleAgeChange} />
          <label> Phone No.:</label>
          <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
          <label> Address:</label>
          <input type="text" value={this.state.add} onChange={this.handleAddChange} />
            <br /> <br />
          <input type="submit" value="Submit" className='btn btn-primary'/>
        </form>
      );
    }
  }

  export default NameForm