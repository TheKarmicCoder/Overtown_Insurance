// Footer.js
import SocialIcons from './SocialIcons';
import { Container, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const GradientFooter = styled('footer')(({ theme }) => ({
  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
  transition: 'background 0.5s',
  backgroundColor: '#2c7bfe',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
 
}));

const FooterContent = ({ children }) => (
  <Container
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'center',
      paddingTop: '10px', // Adjust as needed for spacing
      paddingBottom: '10px', // Adjust as needed for spacing
      color: 'white', // Set text color to white
    }}
  >
    {children}
  </Container>
);

const Footer = ({ socialData }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <GradientFooter>
      <FooterContent>
        <SocialIcons socialData={socialData} />
        {/* Add additional footer content as needed */}
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} Overtown Insurance Agency
        </Typography>
      </FooterContent>
    </GradientFooter>
  );
};

export default Footer;
