
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { BrowserRouter, Routes, Route} from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'> 
       <Login/> 
      </Route>
      <Route path='/register'>
        <Register/>
      </Route> 
      <Route path='/dashboard'>
        <Navbar/>
        <Dashboard/>
      </Route> 
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
