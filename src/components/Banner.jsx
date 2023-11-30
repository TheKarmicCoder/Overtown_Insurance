// Banner.js
import styled from 'styled-components';
import QuoteForm from './QuoteForm';


const BannerContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('/audi.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem;
  margin-top: 3rem;
  font-family: 'Libre Baskerville', serif; /* Apply the Google Font */
  opacity: 0.9; /* Adjust the opacity */
  /* Small screens (320px and below) */
  @media screen and (max-width: 320px) {
    margin-right: -4rem;
  }

  /* Small to medium screens (321px to 768px) */
  @media screen and (min-width: 321px) and (max-width: 768px) {
    margin-right: -7rem;
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

const BannerContent = styled.div`
  max-width: 800px;
  margin-top: -8rem;
  margin-left: -2rem;

  /* Small screens (320px and below) */
  @media screen and (max-width: 320px) {
    margin-top: 3px;
    margin-right: -1.5rem;
    
  }

  /* Small to medium screens (321px to 768px) */
  @media screen and (min-width: 321px) and (max-width: 768px) {
    margin-left:-0.5rem;
  }

  /* Medium screens (769px to 1024px) */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-left: 2.5rem;
  }

  /* Large screens (1025px and above) */
  @media screen and (min-width: 1025px) {
    
  }
`;

const Heading = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-weight: bold; /* Apply bold to the heading */
  font-style: italic; /* Apply italic to the heading */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Paragraph = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: italic; /* Apply italic to the paragraph */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Heading>Overtown Insurance Agency</Heading>
      <Paragraph><strong>No one</strong>&nbsp; is ever turned away because of Age or driving history.</Paragraph>
      <BannerContent>
        <QuoteForm />
      </BannerContent>
    </BannerContainer>
  );
};


export default Banner;
