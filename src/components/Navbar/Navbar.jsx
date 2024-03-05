import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={'background: transparent'} component="nav" color='secondary'>
           
     
     <Container maxWidth="lg">
     <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,display: { sm: 'none' }  }}
          >
            <MenuIcon sx={'color:red'} />
          </IconButton>
          <Typography
            variant="h6"
            color={'primary'}
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Medi Doctor
          </Typography
  
          >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button sx={{color:'#272727',fontWeight:'bold'}} key={item} >
                {item}
              </Button>
            ))}

<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mx: 2 }}
          >
            <SearchIcon sx={'color:red'} />
          </IconButton>


            <Button onClick={()=>handleOpen()} variant='contained' sx={{background:'#F5DD61',color:'black',py:1}} >Make Appointment</Button>
          </Box>
        </Toolbar>
     </Container>

     <AppointmentModal 
     open={open}
     handleClose={handleClose}
     >
      
      </AppointmentModal>
        
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

Navbar.propTypes = {
  
  window: PropTypes.func,
};

export default Navbar;
