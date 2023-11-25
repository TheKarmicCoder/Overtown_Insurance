import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Grid container spacing={2}>
        {/* Left section with image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
              
            }}
          >
            <img
              src="/agent2.jpg"
              alt="About Us"
              style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
                
              }}
            >
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#2c7bfe',
                  color: '#ffffff',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
                }}
              >
                40
              </Box>
              <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>years of experience</Typography>
            </Box>
          </Box>
        </Grid>
        {/* Right section with text */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: '20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              border: '2px solid #2c7bfe',
              borderRadius: '8px',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)', // Drop shadow
            }}
          >
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
