
import { Grid } from "@mui/material"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"

function App() {
  

  return (
    <>
    
     <Navbar></Navbar>

      <Grid sx={{pt:8}}>
      <Banner></Banner>
      </Grid>
    

     
    </>
  )
}

export default App
