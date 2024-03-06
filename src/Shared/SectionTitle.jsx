import { Paper, Typography } from "@mui/material";


const SectionTitle = ({title}) => {

  return (
    <div>
      <Paper sx={{textAlign:'center',width:'fit-content',mx:'auto',px:2,py:3}} elevation={2}>
       <Typography color={'primary'} fontWeight="bold">
       {title}
       </Typography>
      </Paper>
    </div>
  );
};

export default SectionTitle;