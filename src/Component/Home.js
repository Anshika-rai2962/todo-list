import React, { Component } from 'react'

 class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        pNumber: '',
        address: '',
        message: ''
    };
  }

  handleChange = (e) => {
    this.setState ({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
// You can access the form data from this.state and perform any further actions here 
// For demonstration purposes, let's just show an alert with the form data

const formData = {
   firstName: this.state.firstName,
   lastName: this.state.lastName,
   email: this.state.email,
   pNumber: this.state.pNumber,
   address: this.state.address,
   message: this.state.message
};

alert(JSON.stringify(formData));

}; 

  
render() {
return (
  <>
     <div className="container">
    <form onSubmit={this.handleSubmit}>
    <div className="mb-3">
  <label htmlFor="firstName" className="form-label">First Name</label>
 <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} />

<label htmlFor="lastName" className="form-label">Last Name</label>
<input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={this.handleChange} />

<label htmlFor="email" className="form-label">Email address</label>
<input type="email" className="form-control" id="email" placeholder="Enter Your Email" onChange={this.handleChange} />

<label htmlFor="pNumber" className="form-label">Phone Number</label>
<input type="text" className="form-control" id="pNumber" placeholder="Phone Number" onChange={this.handleChange} />

<label htmlFor="address" className="form-label">Address</label>
<input type="text" className="form-control" id="address" placeholder="Address" onChange={this.handleChange} />
  </div>
 <div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
 <textarea className="form-control" id="message" rows="4" onChange={this.handleChange}></textarea>
  </div>

  <input type="submit" value="Submit" className='btn btn-primary'/>
    </form>
    </div>
  </>
)
}
}
export default Home