
import '../App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from '../pages/Home.js';
 import About from '../pages/About.js';
 import Type from '../pages/Bustype.js';
 import Contact from '../pages/Contact.js';
function Nav() {
  return (
    <nav className="navv">
    

    <Router>
    <Link to="">Home</Link>
         <Link to="/about">About | </Link>
         <Link to="/type">Bus Type |</Link>
         <Link to="/contact">Contact</Link>

       <Route exact path="/home" Component ={Home}/>
       {/* <Route path="/about" Component ={About}/>
       <Route path="/type" Component ={Type}/>
       <Route path="/contact" Component ={Contact}/> */}

     </Router> 
  
     {/* <Home/>
     <About/>
     <Type/>
     <Contact/> */}
    </nav>  
     
      
    
  );
}

export default Nav;

 
