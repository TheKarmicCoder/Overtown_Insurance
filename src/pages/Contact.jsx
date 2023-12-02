// Inside Contact.js
import QuoteForm from '../components/QuoteForm';
import { Container } from '@mui/material';
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin-top: -5rem;

  @media screen and (max-width: 320px) {
    margin-top: 1rem;
    margin-bottom: 20rem;
    margin-left: -0.5rem;
  }

  @media screen and (min-width: 321px) and (max-width: 425px) {
    margin-top: -6rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Your styles for screens with a width between 769 pixels and 1024 pixels go here */
  }

  @media screen and (min-width: 1025px) {
    /* Your styles for screens with a width of 1025 pixels and above go here */
  }
`;

const Contact = () => {
  return (
    <CenteredContainer>
      <QuoteForm className="contact-page" />
    </CenteredContainer>
  );
};

export default Contact;
