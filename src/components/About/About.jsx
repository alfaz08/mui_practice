import { Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle";
import Title from "../../Shared/Title";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  return (
    <Grid>
      <SectionTitle title="about"></SectionTitle>
      <Title title="Who We are"></Title>
 
    <Container>
      <Grid container justifyContent={'center'} alignItems={'start'}>

        <Grid item xs={12} lg={6}>
        <Typography variant="h4">
          Hello
        </Typography>
       <img src="https://i.ibb.co/GWYBcY5/bruvana-sports-electrolyte-beverage-mango-flavor-500-ml.jpg" alt="" />
        </Grid>
        <Grid item xs={12} lg={6}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>

      </Grid>

      

    </Container>


    </Grid>
  );
};

export default About;