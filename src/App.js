// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/gallery" element={ <Gallery/> } />
  
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
