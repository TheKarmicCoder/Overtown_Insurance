// Navbar.js
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCogs, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { styled } from '@mui/system';
import { useScrollTrigger, Slide, AppBar, Toolbar, Typography, Button } from '@mui/material';

const GradientAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
   backgroundColor: '#2c7bfe',
  transition: 'background 0.5s',
  position: 'fixed',
  zIndex: theme.zIndex.appBar + 1,
}));

const Navbar = () => {
  const [fade, setFade] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    setFade(trigger);
  }, [trigger]);

  return (
    <Slide appear={false} direction="down" in={!fade}>
      <GradientAppBar elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Overtown Insurance Agency
          </Typography>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', padding: 0, margin: 0 }}>
            <li><Button component={Link} to="/" color="inherit"><FaHome style={{ marginRight: '5px' }} /> Home</Button></li>
            <li><Button component={Link} to="/services" color="inherit"><FaCogs style={{ marginRight: '5px' }} /> Services</Button></li>
            <li><Button component={Link} to="/about" color="inherit"><FaInfoCircle style={{ marginRight: '5px' }} /> About</Button></li>
            <li><Button component={Link} to="/contact" color="inherit"><FaPhone style={{ marginRight: '5px' }} /> Contact</Button></li>
          </ul>
        </Toolbar>
      </GradientAppBar>
    </Slide>
  );
};

export default Navbar;
