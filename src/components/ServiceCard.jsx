// ServiceCard.js

import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ServiceCard = ({ title, icon, description, image, isAlternate }) => {
  const cardContentStyles = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: isAlternate ? 'row-reverse' : 'row', 
      '@media (max-width: 320px)': {
        flexDirection: 'column',
        ...cardContentStyles,
      },
      '@media (min-width: 321px) and (max-width: 375px)': {
        flexDirection: 'column',
        ...cardContentStyles,
      },
      '@media (min-width: 376px) and (max-width: 424px)': {
        flexDirection: 'column',
        ...cardContentStyles,
      },
      '@media (min-width: 425px) and (max-width: 480px)': {
        flexDirection: 'column',
        ...cardContentStyles,
      },
      '@media (min-width: 481px) and (max-width: 767px)': {
        ...cardContentStyles,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        ...cardContentStyles,
      }
    }}>
      <CardContent>
        <Typography variant="h5" sx={cardContentStyles}>
           {title}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '10px', fontSize: '2rem' }}>{icon}</div>
          <Typography variant="body1">{description}</Typography>
        </div>
        {/* Add more content or details as needed */}
      </CardContent>
      {image && <CardMedia component="img" src={image} alt={title} sx={{ width: 200 }} />}
    </Card>
  );
};

export default ServiceCard;
