import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Backdrop from './components/Backdrop/Backdrop';

const Home = React.lazy(() => import('./components/Home/Home'))
const Login = React.lazy(() => import('./components/Login'))



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<h2>Loading</h2>}>
          <Login />
        </Suspense>}>

        </Route>
        <Route exact path='/home' element={<Suspense fallback={<h2>Loading</h2>}>
          <div className="App">
            <Home />
            <Backdrop />
          </div>
        </Suspense>}>

        </Route>
      </Routes>

    </Router>

  );
}

export default App;


