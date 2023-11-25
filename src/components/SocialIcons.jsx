// SocialIcons.js
import { FaFacebook, FaInstagram, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import socialData from "../constants/socialData";

const SocialIconLink = ({ to, children }) => (
  <Button component={Link} to={to} target="_blank" rel="noopener noreferrer" color="inherit">
    {children}
  </Button>
);

const SocialIconsContainer = ({ children }) => (
  <Stack direction="row" spacing={1}>
    {children}
  </Stack>
);

const SocialIcons = ({ }) => {
  return (
    <SocialIconsContainer>
      <SocialIconLink to={socialData.facebookUrl}>
        <FaFacebook />
      </SocialIconLink>
      <SocialIconLink to={socialData.instagramUrl}>
        <FaInstagram />
      </SocialIconLink>
      <SocialIconLink to={socialData.githubUrl}>
        <FaGithub />
      </SocialIconLink>
      <SocialIconLink to={socialData.tiktokUrl}>
        <FaTiktok />
      </SocialIconLink>
      <SocialIconLink to={socialData.youtubeUrl}>
        <FaYoutube />
      </SocialIconLink>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
