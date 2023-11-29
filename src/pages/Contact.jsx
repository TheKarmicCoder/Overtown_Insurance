import QuoteForm from '../components/QuoteForm';
import { Container } from '@mui/material';
import styled from 'styled-components';
import { useEffect } from 'react';


const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 125vh;
  text-align: center;
  
  

  @media screen and (max-width: 320px) {
    margin-top: 7rem;
    margin-bottom: 20rem;
  }



  /* Media query for devices with a width between 375px and 425px */
  @media screen and (min-width: 375px) and (max-width: 425px) {
    margin-top: 5rem; /* Adjust the top margin to center the form */
    margin-right: -20rem; /* Adjust the right margin as needed */
    margin-bottom: 0; /* Adjust the bottom margin as needed */
  }


  /* Medium screens (769px to 1024px) */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
   margin-right:  /* Adjust the left margin to center the form */ 
  }

  /* Large screens (1025px and above) */
  @media screen and (min-width: 1025px) {
    /* Your styles for screens with a width of 1025 pixels and above go here */
  }
`;

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <CenteredContainer>
      <QuoteForm />
    </CenteredContainer>
  );
};

export default Contact;
