import { Container, Typography, Grid, Paper, Box, ThemeProvider, createTheme } from '@mui/material';

// Create a custom theme with the desired fonts
const theme = createTheme({
  typography: {
    fontFamily: [
      'Libre Baskerville', // Your custom font
      'Arial', // Fallback font
      'sans-serif',
    ].join(','),
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {/* Right section with text */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: '20px',
                height: '60%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: '2px solid #2c7bfe',
                borderRadius: '8px',
                boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
                marginTop: '23rem',
                marginRight: '1rem',
                '@media (max-width: 768px)': {
                  height: 'auto',
                  marginTop: '8rem',
                  marginBottom: '8rem',
                },
                '@media (min-width: 769px) and (max-width: 1024px)': {
                  height: 'auto',
                  marginTop: '24.5rem',
                  marginBottom: '8rem',
                  marginLeft: '1rem',
                },
              }}
            >
              <Typography variant="body1">
                Maggie and I have proudly served the community of Delaware County, with a special focus on the esteemed residents of Chester, for over two decades. Our commitment revolves around providing affordable auto insurance and reliable check-cashing services. Despite the transformative impact of Covid-19 on the business landscape, we continue to advocate for in-person interactions, welcoming walk-in customers who seek the personalized touch of a face-to-face meeting.

                Our conveniently situated office in downtown Chester at 535 Avenue of the States, PA 19013, serves as a testament to our accessibility. At Overtown Insurance, our dedication extends to linguistic inclusivity, as we are fluent in Spanish. We prioritize understanding and addressing the unique needs of our valued customers.

                Our comprehensive range of services includes auto insurance, life insurance, homeowners insurance, notary services, online registration, and more. At Overtown Insurance, we are more than a service provider, we are your reliable partner in safeguarding what matters most.
              </Typography>
            </Paper>
          </Grid>
          {/* Left section with image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '22rem',
                '@media (max-width: 1024px)': {
                  marginRight: '0', // Adjust marginRight for 1024px screens
                  alignItems: 'flex-end', // Align to the right for 1024px screens
                },
                '@media (max-width: 1200px)': {
                  marginRight: '16rem',
                  marginTop: '-10px',
                },
                '@media (max-width: 992px)': {
                  marginRight: '8rem',
                },
                '@media (max-width: 768px)': {
                  display: 'none',
                },
              }}
            >
              <Box
                sx={{
                  width: '220%',
                  borderRadius: '8px',
                  marginBottom: '-10rem',
                  marginTop: '2.5rem',
                  marginRight: '4.5rem',
                  '@media (max-width: 1024px)': { marginRight: '-7rem', marginTop: '3.5rem'}
                }}
              >
                <img
                  src="/phil.png"
                  alt="About Us"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                  <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: '1rem' }}>
    <strong>Phillip</strong>
  </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  marginLeft: '30rem',
                  '@media (max-width: 1024px)': { marginRight: '-12rem' }
                }}
              >
                <img
                  src="/maggie.jpg"
                  alt="About Us"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                 <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: '1rem' }}>
   <strong>Maggie</strong> 
  </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '20px',
                  '@media (max-width: 768px)': {
                    display: 'none',
                  },
                  '@media (max-width: 1024px)': {
             
                  },
                }}
              >
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#2c7bfe',
                    color: '#ffffff',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '-30rem',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
                    marginTop: '-43rem',
                    marginRight: '80rem',
                  }}
                >
                  40
                </Box>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: "30rem", marginRight: "59em", fontSize: "17.5px" }}><strong>years of experience</strong></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default About;

