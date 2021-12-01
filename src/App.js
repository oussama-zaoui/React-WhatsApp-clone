import React , { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Home=React.lazy(()=>import('./components/Home/Home'))
const Login=React.lazy(()=>import('./components/Login'))



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Suspense fallback={<h2>Loading</h2>}>
          <Login />
        </Suspense>}>
          
        </Route>
        <Route exact path='/home' element={<Suspense fallback={<h2>Loading</h2>}>
        <div className="App">
      <Home /> 
    <div className="appBar" >
      <div className='logoContainer'>
      <img src="https://img.icons8.com/color/96/000000/whatsapp--v1.png" alt=""/>
      <span>WHATSAPP WEB</span>
      </div>
    
    </div>
    </div>
        </Suspense>}>
      
        </Route>
      </Routes>
     
    </Router>
    
  );
}

export default App;


