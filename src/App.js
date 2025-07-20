import Navbar from "./Navbar";
import Card from './Card'
import About from './About'
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/Home" element={<Card />} />
      </Routes>
   </>
  );
}

export default App;
