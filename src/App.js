
import './App.scss';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Login/>}>
          
        </Route>
        <Route exact path='/home' element={  <div className="App">
      <Home /> 
    <div className="appBar" >
      <div className='logoContainer'>
      <img src="https://img.icons8.com/color/96/000000/whatsapp--v1.png" alt=""/>
      <span>WHATSAPP WEB</span>
      </div>
    
    </div>
    </div>}>
      
        </Route>
      </Routes>
     
    </Router>
    
  );
}

export default App;
