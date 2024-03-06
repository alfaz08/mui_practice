
import { Grid } from "@mui/material"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import WhyUs from "./components/WhyUs/WhyUs"

function App() {
  

  return (
    <>
    
     <Navbar></Navbar>

      <Grid sx={{pt:8}}>
      <Banner></Banner>
      <WhyUs></WhyUs>
      </Grid>
    

     
    </>
  )
}

export default App
