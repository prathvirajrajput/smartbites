
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import gsap from 'gsap';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import Add from './Components/Add';
import List from './Components/List';
import Update from './Components/Update';
// import Login from './Components/Login';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
    <Router>
      <Routes>
           <Route exact path="/" element={<SignUp />}></Route>
           <Route exact path="/Login" element={<Login />}></Route>
           <Route exact path="/Home" element={<Home />}></Route>
           <Route exact path="/Add" element={<Add />}></Route>
           <Route exact path="/List" element={<List />}></Route>
           <Route exact path="/Update" element={<Update />}></Route>


           </Routes>
    </Router>
    </div>
  );
}

export default App;
