// IntroSection.js

import styled from 'styled-components';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;

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

const IntroImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    max-width: 50%;
    margin-bottom: 0;
  }
`;

const Intro = () => {
  return (
    <IntroContainer>
      <IntroImage src="/agent1.jpg" alt="Intro Image" />
      <p>With over 40 years of insurance experience, Overtown Insurance offers insurance in 4 states; Pennsylvania, Delaware, Ohio, and Indiana. <br></br> 
      When it comes to insurance coverage, <strong>NO ONE</strong> is ever turned away because of age or driving history.</p>
    </IntroContainer>
  );
};

export default Intro;
