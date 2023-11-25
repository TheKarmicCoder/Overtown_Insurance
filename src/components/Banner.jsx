// Banner.js
import styled from 'styled-components';
import QuoteForm from './QuoteForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHome, faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

const BannerContainer = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('/audi.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem;
  margin-top: 3rem;

  /* Small screens (320px and below) */
@media screen and (max-width: 320px) {

}

/* Small to medium screens (321px to 768px) */
@media screen and (min-width: 321px) and (max-width: 768px) {
  margin-right: -7rem;+
  
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
  margin-left: -20rem;

  /* Small screens (320px and below) */
@media screen and (max-width: 320px) {
 margin-left: 4px;
 margin-top: 3px;
}

/* Small to medium screens (321px to 768px) */
@media screen and (min-width: 321px) and (max-width: 768px) {
  /* Your styles for screens with a width between 321 pixels and 768 pixels go here */
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


const Banner = () => {
  return (
    <BannerContainer>
     
        <h1>Overtown Insurance Agency</h1>
        <p>No one is ever turned away because of Age or driving history.</p>
        <BannerContent>
        <QuoteForm />

      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
