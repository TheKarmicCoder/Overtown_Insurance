// Home.js

import styled from 'styled-components';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Intro from "../components/Intro";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const HomeContainer = styled.div`
  background-color: #f5f5f5; /* Set your desired background color */
  padding: 0 1rem; /* Adjust padding as needed */

  @media screen and (min-width: 321px) and (max-width: 768px) {
    padding: 3 2rem; /* Adjust padding for medium screens */
    
    margin-left: -20rem; /* Adjust
    

  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0 4rem; /* Adjust padding for large screens */
  }

  @media screen and (min-width: 1025px) {
    padding: 0 6rem; /* Adjust padding for extra-large screens */
  }
`;

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Intro />
    <Services />
    <HomeContainer>
      <Contact />
      {/* Add clickable sections for navigation */}
    </HomeContainer>
    </>
  );
};

export default Home;
