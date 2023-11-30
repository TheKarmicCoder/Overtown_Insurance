
import QuoteForm from '../components/QuoteForm';
import { Container } from '@mui/material';
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust this to control the height of the centering container */
  text-align: center;
  margin-top: 15rem;

  @media screen and (max-width: 320px) {
    margin-top: 7rem; /* Adjust the margin-top for smaller screens */
    margin-bottom: 20rem; /* Adjust the margin-bottom for larger screens */
  }

  /* Small to medium screens (min-width: 321px ) and (max-width: 425px) */
  @media screen and (min-width: 321px) and (max-width: 425px) {
    margin-top: 7rem; /* Adjust the margin-top for small to medium screens */
    margin-bottom: 0; /* Adjust the margin-bottom for small to medium screens */
    
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
