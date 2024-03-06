import { Button, Container, Grid, Typography } from "@mui/material";


const Banner = () => {

  return (
    <Grid
    sx={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/frCDTHK/img-3.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      py:23
    }}
  >
    <Container sx={{height:'100%'}}>
    <Grid justifyContent={'start'} alignItems={'center'}>
    <Grid item xs={12} md={8} >
      <Typography sx={{color:'white'}} variant="h2">
          Trusted dental Care
      </Typography >
      <Typography gutterBottom   sx={{color:'white'}}  >
        Lorem ipsum dolor sdffsdf sit amet consectetur adipisicing elit. Quidem el
      </Typography>

      <Grid sx={{mt:4}}>
      <Button  size="large" variant="contained" color="primary" >Book Now</Button>
      <Button size="large" sx={{ml:4}} variant="contained" color="secondary">Buy Now</Button>
      </Grid>


    </Grid>
    </Grid>
    
    </Container>
  </Grid>
  );
};

export default Banner;