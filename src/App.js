import './App.css';
import Logo from './Components/Logo';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {

  function bringMeHome(){
    console.log("Clicked");
  }
  return (
    <div className="App">
      <header className="App-header">
       
        
      <nav>
      <Link to="/" element="">RealityShift</Link>
      <Link to="/home" element="">Home</Link>
      <Link to="/about" element="">About</Link>
      <Link to="/contact" element="">Contact</Link>
    </nav>
     
      <Routes>
        <Route path="/" element={<Logo onClick={bringMeHome}/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
