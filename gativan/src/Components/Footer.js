import React from 'react'
import Box from '@mui/material/Box';
import GooglePlay from '../assets/GooglePlay.png'
import SubLogo from '../assets/SubLogo.png'
import Logo from '../assets/logo.png'
import Typography from '@mui/material/Typography';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaWhatsapp } from 'react-icons/fa';
import { MdEmail,MdCall,MdWork } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
const Footer = () => {
   
  return (
    <> 
<Box style={{backgroundColor:"#122164",padding:"0 0 0 1rem",display:"flex",alignItems:"center" ,justifyContent:"space-between" ,height:"200px"}}>
<Box>
<img src={Logo} alt="" width={300} height={90} />

<Typography width={300} style={{color:"white",fontSize:"0.5rem"}}>
Gativan is a multi-brand car and bike servicing platform for vehicle
owners that want hassle free, transparent and reliable service.
Book your services online and get free pick up and drop off.
Your vehicles are serviced by Gativan's network of high-tech
garages and trained mechanics.
</Typography>
<Box style={{display:"flex", color:"white",alignItems:"center",justifyContent:"space-around",width:"250px",margin:"1rem 0 0 0 "}}>

<FaFacebook />
<FaTwitter />
<FaInstagram />
<FaWhatsapp />
<FaYoutube />

</Box>


</Box>

<Box style={{display:"flex",flexDirection:"column",alignItems:"center",}}>
<Box  style={{display:"flex" ,alignItems:"center",color:"white",margin:"0.5rem 0",}}> 
<Typography varient="h2"  style={{display:"flex"}}  ><MdEmail size={25}/> Email :</Typography>
<Typography > nfjdsnjvsv@gmail.com</Typography>
</Box>
<Box  style={{display:"flex" ,alignItems:"center",color:"white",margin:"0.5rem 0"}}> 
<Typography varient="h2"  style={{display:"flex"}}><MdCall size={25}/> Phone :</Typography>
<Typography > +91 97654341</Typography>
</Box>
<Box  style={{display:"flex" ,alignItems:"center",color:"white",margin:"0.5rem 0"}}> 
<Typography varient="h2"  style={{display:"flex"}}><MdWork size={25}/> Working Day :</Typography>
<Typography > nfjdsnjvsv@gmail.com</Typography>
</Box>
<Box  style={{display:"flex" ,alignItems:"center",color:"white",margin:"0.5rem 0"}}> 
<Typography varient="h2" style={{display:"flex"}}><BiTime size={25}/> Workign Hours :</Typography>
<Typography > 9HR</Typography>
</Box>

  
</Box>
<Box style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
 <img src={SubLogo} alt="sublogo" width={300} height={80}  />
<img src={GooglePlay} alt="GooglePlay" width={200} height={60} />
</Box>

</Box>
<Typography style={{textAlign:"center",fontWeight:'bold',fontSize:"0.7rem"}}>© 2016-2021 Copyright: KStudio Solutions Private Limited</Typography>
    </>
  )
}

export default Footer