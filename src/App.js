
import './App.scss';
import Header from './Commons/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Home from './Components/Main/Home';
import RightMain from './Commons/Right/RightMain';
import Profile from './Components/Profile/Profile';
import Log from './Components/Log/Log';


const Element = ({Elem}) =>{
  return(
    <div className="app">
      <div className="container">
      <Header />
      <Elem />
      <RightMain />
      </div>
    </div>
  )
}
function App() {
  const test = localStorage.getItem("users");
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Log />}></Route>
        <Route path="/home" element={<Element Elem={Home} />}></Route>
        <Route path="/profile" element={<Element Elem={Profile} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
