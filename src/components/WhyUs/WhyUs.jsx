import { Grid } from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle";
import Title from "../../Shared/Title";


const WhyUs = () => {
  return (
    <Grid sx={{my:8}}>
      <SectionTitle title={'Why Us'}></SectionTitle>
      <Title title={"Why Choose Us"}></Title>
    </Grid>
  );
};

export default WhyUs;