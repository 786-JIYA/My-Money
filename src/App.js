import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'
import NavBar from './components/NavBar.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={ <Signup/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
