// imports 
import './App.css';
import Create from './components/create'
import Login from './components/login'
import {  Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';




function App() {
  return (
    
    
      <div className="main">
        <h2 className="main-header"></h2>
        <div>
          <Routes path='/'>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
  
  );
}

export default App;