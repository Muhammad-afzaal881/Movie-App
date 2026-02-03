import Navbar from "./components/Navbar";
import Card from './components/Card'
import About from './components/About'
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar/>
   
   <Routes>
    <Route path="/" element={<Card />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Home" element={<Card />} />
      </Routes>
   </>
  );
}

export default App;