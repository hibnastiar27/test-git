import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid, Paper, Chip, List, ListItem, ListItemText, Divider } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { destinations } from '../data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4">Destination not found</Typography>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate('/')}
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        <Box 
          sx={{ 
            height: 300, 
            backgroundImage: `url(${destination.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              p: 2, 
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
            }}
          >
            <Typography variant="h4" color="white">
              {destination.name}
            </Typography>
            <Chip label={destination.type} size="small" sx={{ mt: 1, bgcolor: 'primary.main', color: 'white' }} />
          </Box>
        </Box>
        
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" paragraph>
            {destination.details}
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Top Attractions
              </Typography>
              <List>
                {destination.attractions.map((attraction, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemText primary={attraction} />
                    </ListItem>
                    {index < destination.attractions.length - 1 && <Divider />}
                  </div>
                ))}
              </List>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Culinary Highlights
              </Typography>
              <List>
                {destination.culinaryHighlights.map((dish, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemText primary={dish} />
                    </ListItem>
                    {index < destination.culinaryHighlights.length - 1 && <Divider />}
                  </div>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default DestinationDetail;