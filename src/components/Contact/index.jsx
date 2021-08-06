
import React, { useState } from 'react';
const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return (
        <section>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="text" name="email" onChange={handleChange} defaultValue={email}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" onChange={handleChange} defaultValue={message} rows="5"  />
            </div>
            <button type="submit">Submit</button>
        </form>
      </section>
    )
}

export default ContactForm
