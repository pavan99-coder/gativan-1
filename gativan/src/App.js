
import './App.css';
import Home from './Components/Home';
import ChooseLocation from './Components/ChooseLocation'
import CarService from './Components/CarService'
import BikeService from './Components/BikeService'
import Blog from './Components/Blog'
import Faq from './Components/Faq'
import Contact from './Components/Contact'
import { BrowserRouter,Routes, Route, } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<ChooseLocation />} />
        <Route path="/carservice" element={<CarService />} />
        <Route path="/bikeservice" element={<BikeService />} />
        <Route path="blog/" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
    
     
  
  );
}

export default App;
