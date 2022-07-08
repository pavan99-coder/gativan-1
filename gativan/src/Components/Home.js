import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between" ,width:"100vw",height:"100vh"}}>
    <div>
 <Header/>
    </div>
    <div>
 <Footer/>
    </div>
       
       
    </div>
  )
}

export default Home