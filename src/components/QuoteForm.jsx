// QuoteForm.js
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const FormContainer = styled.div`
 
  padding: 20px;
  max-width: px;
  margin-top: 12rem;
  font-family: 'Libre Baskerville', serif; /* Apply the Google Font */
  opacity: 0.9; /* Add opacity */

  @media screen and (max-width: 320px) {
    /* Adjust the breakpoint as needed */
    margin-left: 1rem;
    margin-top: -10px;
  }
`;

const FormTitle = styled.h1`
  text-align: center;
  font-family: 'Libre Baskerville', serif; /* Apply the Google Font */
  font-weight: bold; /* Apply bold to the title */
  font-style: italic; /* Apply italic to the title */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Add dark text shadow */
  opacity: 0.9; /* Add opacity */

  @media screen and (max-width: 320px) {
    /* Adjust the breakpoint as needed */
  }
`;

const FormSubtitle = styled.p`
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  font-style: regular;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  opacity: 0.9;

  @media screen and (max-width: 320px) {
    display: none; /* Hide the subtitle on screens with a width of 320px or less */
  }

  @media screen and (max-width: 320px) {
    white-space: nowrap;
    margin-left: -4rem;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`;



const FormRow = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    background: transparent; /* Set background to transparent */
    border: none;
    border-bottom: 1px solid #ddd; /* Add a bottom border for the line effect */
    box-sizing: border-box;
    outline: none; /* Remove the default input focus outline */
    
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #001f3f; /* Deep Blue */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message, image } = formData;

    // Create mailto link
    const mailtoLink = `mailto:jaygolden93@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Create FormData object to send the form data, including the image
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('email', email);
    formDataToSend.append('phone', phone);
    formDataToSend.append('message', message);
    formDataToSend.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully', response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle failure, e.g., show an error message
    }
  };

  return (
    <FormContainer>
      <FormTitle>Contact Us</FormTitle>
      <FormSubtitle>   Don't hesitate to reach out. <br></br> 
      &nbsp; We will get back to you as soon as possible.</FormSubtitle>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </FormRow>
        {/* <FormRow>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </FormRow> */}
        <SubmitButton type="submit">Get Quote</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default QuoteForm;
