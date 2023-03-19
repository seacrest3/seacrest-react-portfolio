import React from "react";
import { useState } from "react";

const styles = {
  header: {
    textAlign: 'center',
    margin: '20px 0',
    color: '#2777F0',
  },

  submitBtn: {
    backgroundColor: '#2777F0',
    color: '#fff',
    cursor: 'pointer',
  }
};

function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
}

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1 style={styles.header}>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
        <input  name="email" onChange={handleChange} type="text" placeholder="Enter Your Email Address" />
        <textarea  name="message" onChange={handleChange} placeholder="Enter your message..." cols="30" rows="10"></textarea>
        <button style={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
