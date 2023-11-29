
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Intro from "../components/Intro";
import Services from "../pages/Services";
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Home = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <>
      <Navbar />
      <Banner />
      <Intro />
      <Services />
      <Container
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '0 1rem',
          
          [theme.breakpoints.down('sm')]: {
            padding: '0 2rem',
            marginLeft: isMediumScreen ? '-20rem' : '0',
          },
          [theme.breakpoints.between('lg', 'xl')]: {
            padding: '0 4rem',
          },
          [theme.breakpoints.up('xl')]: {
            padding: '0 6rem',
          },
        }}
      >
      
        {/* Add clickable sections for navigation */}
      </Container>
    </>
  );
};

export default Home;
