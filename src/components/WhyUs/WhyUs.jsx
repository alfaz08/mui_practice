import { Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle";
import Title from "../../Shared/Title";
import { HomeRepairService } from "@mui/icons-material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const WhyUs = () => {


  const whyChooseUs = [
    {
      icon: <HomeRepairService color="primary"></HomeRepairService> ,
      title: "Experienced Professionals",
      description:"Our team consists of highly skilled and experienced"
    },
    {
      icon: 'home',
      title: "Experienced Professionals",
      description:"Our team consists of highly skilled and experienced"
    },
    {
      icon: 'home',
      title: "Experienced Professionals",
      description:"Our team consists of highly skilled and experienced"
    },
    {
      icon: 'home',
      title: "Experienced Professionals",
      description:"Our team consists of highly skilled and experienced"
    }
  ]
  return (
    <Grid sx={{my:8}}>
      <SectionTitle title={'Why Us'}></SectionTitle>
      <Title title={"Why Choose Us"}></Title>
    <Container maxWidth="lg">
    <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
        
          {
            whyChooseUs?.map((feature)=>(
              <Grid key={feature} item xs={12} md={6} lg={3}>
                <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://i.ibb.co/GWYBcY5/bruvana-sports-electrolyte-beverage-mango-flavor-500-ml.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {feature.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {feature.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="medium" variant="contained" color="primary">Share</Button>
        <Button  size="medium" variant="contained" color="secondary">Learn More</Button>
      </CardActions>
    </Card>
                </Grid> 
            ))
          }
        
      </Grid>
     </Container>
     
     



    </Grid>
  );
};

export default WhyUs;