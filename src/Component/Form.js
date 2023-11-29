import React from 'react'

function Form() {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
    
        // Accessing form data
        const formData = {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          pNumber: event.target.pNumber.value,
          address: event.target.address.value,
          message: event.target.areatext.value,
        };
    
        // Logging form data to the console
        console.log('Form Data:', formData);
      };

  return (
    <div>
    <div className="container">
   <form onSubmit={handleSubmit}>
   <div className="mb-3">
 <label htmlFor="firstName" className="form-label"><b>First Name</b></label>
<input type="text" className="form-control" id="firstName" placeholder="First Name..." />

<label htmlFor="lastName" className="form-label"><b>Last Name</b></label>
<input type="text" className="form-control" id="lastName" placeholder="Last Name..." />

<label htmlFor="email" className="form-label"><b>Email address</b></label>
<input type="email" className="form-control" id="email" placeholder="Enter Your Email..." />

<label htmlFor="pNumber" className="form-label"><b>Phone Number</b></label>
<input type="text" className="form-control" id="pNumber" placeholder="Phone Number..." />

<label htmlFor="address" className="form-label"><b>Address</b></label>
<input type="text" className="form-control" id="address" placeholder="Address..." />
 </div>
<div className="mb-3">
 <label htmlFor="areatext" className="form-label"><b>Message</b></label>
<textarea className="form-control" id="areatext" rows="4"></textarea>
 </div>

 <input type="submit" value="Submit" className='btn btn-primary'/>
   </form>
   </div>
 </div>
  )
}

export default Form