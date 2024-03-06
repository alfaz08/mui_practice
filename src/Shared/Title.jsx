import { Typography } from '@mui/material';


const Title = ({title}) => {
  return (
   <Typography variant='h5' align='center' color="secondary" sx={{my:2,}}>
     {title}
   </Typography>
  );
};

export default Title;