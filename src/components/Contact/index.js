// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log('Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//   };

//   return (
//     <section>
//       <h2 className='contact-section' data-testid='h1tag'>
//         {' '}
//         Say <em>Hi!,</em> <em>I'd like to</em> hear from you!
//       </h2>
//       <div className='form'>
//       <form className='contact-form' id='contact-form' onSubmit={handleSubmit}>
//         <div className='contact-input'>
//           <label htmlFor='name'>Name:</label>
//           <input
//             type='text'
//             name='name'
//             size='60'
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>
//         <div className='contact-input'>
//           <label htmlFor='email'>Email address:</label>
//           <input
//             type='email'
//             name='email'
//             size='60'
//             defaultValue={email}
//             onBlur={handleChange}
//           /> 
//         </div>
//         <div className='contact-input'>
//           <label htmlFor='message'>Message:</label>
//           <textarea
//             name='message'
//             rows='5'
//             cols='60'
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className='error-text'>{errorMessage}</p>
//           </div>
//         )}
//           <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//           <button className='btns' data-testid='button' type='submit'>
//             Submit
//           </button>
//           </div>
//       </form>
//       </div>
//       <div className='contact-simple'>
//       <h4>
//         Or just Keep it <em>Simple.</em>
//       </h4>
//       <p>
//       <a href='mailto:brookemadisondesign@gmail.com'>
//         Email: Brookemadisondesign@gmail.com
//         </a>
//       </p>
//       <p>
//       <a href='tel:9042071528'>
//         Phone Number: 904-207-1528
//         </a>
//       </p>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;

import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({ name: "", email: "", message: ""})
  }

  render() {
    return(
      <div className="contact">
      <h2 className='contact-section'>
Say <em>Hi!,</em> <em>I'd like to</em> hear from you!</h2>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <div className="form-group">
          <button type="submit" className="btns contact-btn">Submit</button>
          </div>
        </form>

        <div className='contact-simple'>
      <h4>
         Or just Keep it <em>Simple.</em>
      </h4>
      <p> 
       <a href='mailto:brookemadisondesign@gmail.com'>
         Email: Brookemadisondesign@gmail.com
         </a>
      </p>
       <p>
       <a href='tel:9042071528'>
         Phone Number: 904-207-1528
        </a>
       </p>
       </div>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default ContactForm;