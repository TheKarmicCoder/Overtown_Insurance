
import styled from 'styled-components';
import serviceData from '../constants/serviceData';
import { useNavigate } from 'react-router-dom';


const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 100%;
  padding: 0 1em 1em 1em;
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
    flex: 0 0 33.33%;
    //   max-width: 33.33%;
  }

  /* Large screens (1025px and above) */
  @media screen and (min-width: 1025px) {
    /* Your styles for screens with a width of 1025 pixels and above go here */
  }

  // @media screen and (min-width: 992px) {
  //   flex: 0 0 33.33%;
  //   max-width: 33.33%;
  // }
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


const Services = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <Section>
      <Row>
        <h2 className="section-heading">Our Services</h2>
      </Row>
      <Row>
        {serviceData.map((service) => (
          <Column key={service.id} onClick={navigateToContact}>
            <Card>
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

export default Services;
