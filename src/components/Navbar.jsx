import { useState, useEffect } from 'react';
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
          {/* Brand name visible only on larger screens */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Libre Baskerville', fontStyle: 'italic', fontWeight: 400, display: { xs: 'none', md: 'block' } }}>
            Overtown Insurance Agency
          </Typography>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '5px', padding: 0, margin: 1, marginRight: '-25px', '@media (min-width: 1024px)': { marginLeft: '-25px' } }}>
            <li>
              <Button component={Link} to="/" color="inherit" sx={{ fontFamily: 'Libre Baskerville', fontStyle: 'italic', fontWeight: 400, fontSize: '10px', textAlign: 'right' }}>
                <FaHome style={{ marginRight: '5px', fontSize: '12px' }} />
                <Typography variant="srOnly">Home</Typography>
              </Button>
            </li>
            <li>
              <Button component={Link} to="/services" color="inherit" sx={{ fontFamily: 'Libre Baskerville', fontStyle: 'italic', fontWeight: 400, fontSize: '10px', textAlign: 'right' }}>
                <FaCogs style={{ marginRight: '5px', fontSize: '12px' }} />
                <Typography variant="srOnly">Services</Typography>
              </Button>
            </li>
            <li>
              <Button component={Link} to="/about" color="inherit" sx={{ fontFamily: 'Libre Baskerville', fontStyle: 'italic', fontWeight: 400, fontSize: '10px', textAlign: 'right' }}>
                <FaInfoCircle style={{ marginRight: '5px', fontSize: '12px' }} />
                <Typography variant="srOnly">About</Typography>
              </Button>
            </li>
            <li>
              <Button component={Link} to="/contact" color="inherit" sx={{ fontFamily: 'Libre Baskerville', fontStyle: 'italic', fontWeight: 400, fontSize: '10px', textAlign: 'right' }}>
                <FaPhone style={{ marginRight: '5px', fontSize: '12px' }} />
                <Typography variant="srOnly">Contact</Typography>
              </Button>
            </li>
          </ul>
        </Toolbar>
      </GradientAppBar>
    </Slide>
  );
};

export default Navbar;