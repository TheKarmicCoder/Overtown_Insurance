import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { Container } from '@mui/material';
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh; /* Adjust this to control the height of the centering container */
  text-align: center;

  @media screen and (max-width: 320px) {
    margin-top: 75rem; /* Adjust the margin-top for smaller screens */
    margin-bottom: 20rem; /* Adjust the margin-bottom for larger screens */
  }

  /* Small to medium screens (321px to 768px) */
  @media screen and (min-width: 321px) and (max-width: 768px) {
    margin-top: 55rem; /* Adjust the margin-top for smaller screens */
   
    
  }

  /* Medium screens (769px to 1024px) */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Your styles for screens with a width between 769 pixels and 1024 pixels go here */
  }

  /* Large screens (1025px and above) */
  @media screen and (min-width: 1025px) {
    /* Your styles for screens with a width of 1025 pixels and above go here */
  }
`;


const Contact = () => {
  return (
    <CenteredContainer>
      <QuoteForm />
    </CenteredContainer>
  );
};

export default Contact;
