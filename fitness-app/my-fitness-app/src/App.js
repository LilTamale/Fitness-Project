import './App.css';
import Create from './components/create'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';




function App() {
  return (
    
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Create/>
        </div>
      </div>
  
  );
}

export default App;