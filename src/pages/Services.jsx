import styled from 'styled-components';
import serviceData from "../constants/serviceData";
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
font-family: 'Libre Baskerville', serif;
  height: 100vh;
  width: 101%;
  margin-left: -0.7rem;
  display: grid;
  place-items: center;
  margin-bottom: 23rem; /* Add margin at the bottom */
  margin-top: 5rem;

  @media screen and (max-width: 320px) {
    & { /* Add higher specificity */
      margin-top: 3rem;
      margin-bottom: 225rem;
      margin-left: 1rem;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 374px) {
    & { /* Add higher specificity */
    margin-top: 3rem;
      margin-bottom: 225rem;
      margin-left: -5px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
    & { /* Add higher specificity */
    margin-top: 3rem;
      margin-bottom: 200rem;
      margin-left: 3.2rem;
     
    }
  }
  

  @media screen and (min-width: 426px) and (max-width: 768px) {
    & { /* Add higher specificity */
    margin-top: 3rem;
      margin-bottom: 85rem;
      margin-left: 3.2rem;
      
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & { /* Add higher specificity */
    margin-top: 3rem;
      margin-bottom: 65rem;
      margin-left: -7px;
    
    }
  }
`;


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex: 0 50%;
    max-width: 50%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background: linear-gradient(#ffffff 50%, #2c7bfe 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-position: 0 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  width: 2.5em;
  background-color: #2c7bfe;
  border-radius: 50%;
  transition: 0.5s;

  ${Card}:hover & {
    color: #2c7bfe;
    background-color: #ffffff;
  }
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;

  ${Card}:hover & {
    color: #ffffff;
  }
`;

const Paragraph = styled.p`
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;

  ${Card}:hover & {
    color: #f0f0f0;
  }
`;


const Service = () => {
  const navigate = useNavigate();

const handleServiceClick = () => {
  // Navigate to the contact page
  navigate('/contact');
};

return (
  <Section>
    <Row>
      <h2 className="section-heading">Our Services</h2>
    </Row>
    <Row>
      {serviceData.map((service) => (
        <Column key={service.id} onClick={handleServiceClick}>
          <Card>
            {/* Render the icon directly from the serviceData */}
            <IconWrapper>{service.icon}</IconWrapper>
            <Heading>{service.title}</Heading>
            <Paragraph>{service.description}</Paragraph>
          </Card>
        </Column>
      ))}
    </Row>
  </Section>
);
};


export default Service;
