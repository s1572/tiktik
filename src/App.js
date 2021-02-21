import './App.css';
import Nav from './cmpo/Nav.js';
import Footer from './cmpo/Footer.js';
import Logo from './cmpo/Logo.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Type from './pages/Bustype.js';
import Contact from './pages/Contact.js';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
function App() {
  return (
    <>
      <header  class="App">
       <Logo/> 
      
      </header>
      
      

      <body className="ttt"> 
      
       <Router >
    
       <nav className="navv a">


         <Link to="">Home </Link>|
         <Link to="/about"> About Us </Link>|
         <Link to="/type"> Bus Type </Link>|
         <Link to="/contact"> Contact Us</Link>

      </nav>
         
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/type" component={Type} />
           <Route path="/contact" component={Contact} />

</Router>


    

      </body>
      <Footer/>

      
    </>
    
  );
}


export default App;
