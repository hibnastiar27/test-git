import { Container, Grid, Typography, Box } from '@mui/material';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Explore Top Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover the most beautiful places and delicious culinary experiences across Indonesia
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <Grid item key={destination.id} xs={12} sm={6} md={3}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;