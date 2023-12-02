// Inside QuoteForm.js
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  max-width: px;
  margin-top: 12rem;
  font-family: 'Libre Baskerville', serif;
  opacity: 0.9;
  text-align: center;

  input,
  textarea {
    color: ${props => (props.isContactPage ? 'black' : 'white')};
    &::placeholder {
      color: ${props => (props.isContactPage ? 'black' : 'white')};
    }
  }
`;

const FormTitle = styled.h1`
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  opacity: 0.9;
`;

const FormSubtitle = styled.p`
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  font-style: regular;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  opacity: 0.9;

  @media screen and (max-width: 320px) {
    display: none;
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
    background: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    outline: none;
    color: inherit; /* inherit the text color from the parent */
    padding: 5px;
    text-align: center;

    &::placeholder {
      color: inherit; /* inherit the placeholder color from the parent */
      text-align: center;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #001f3f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QuoteForm = ({ isContactPage }) => {
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

    const mailtoLink = `mailto:overtowninsurance@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;

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
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormContainer isContactPage={isContactPage}>
      <FormTitle>Contact Us</FormTitle>
      <FormSubtitle>Don't hesitate to reach out. <br /> We will get back to you as soon as possible.</FormSubtitle>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
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
            placeholder="Enter valid email address"
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
            placeholder="Enter best contact number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />
        </FormRow>
        <FormRow>
          <label htmlFor="message">Quote Info</label>
          <textarea
            id="message"
            name="message"
            placeholder="Make, Year, Model, VIN Number"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </FormRow>
        <SubmitButton type="submit">Get Quote</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default QuoteForm;
