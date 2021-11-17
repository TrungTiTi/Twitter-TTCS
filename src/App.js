import logo from './logo.svg';
import './App.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Header from './Commons/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Main/Home';
import { createStore } from 'redux';

const initialState = {
  count: 0
}
function App() {
  // const reducer = (state = initialState, action) =>{
  //   console.log('thu')
  //   const { type} = action;
  //   switch (type) {
  //     case 'cong':
  //       return { count: state.count + 1}
  //     case 'tru':
  //       return { count: state.count - 1}
  //     case 'reset':
  //       return initialState
  //     default:
  //       return state
  //   }
  // }
  // const store = createStore(reducer);
  // console.log(store.getState());
  // store.subscribe(() => console.log(store.getState()))
  // const handleC = () => {
  //   store.dispatch({ type: 'cong'})
  // }
  // const handleT = () => {
  //   store.dispatch({ type: 'tru'})
  // }
  // const handleR = () => {
  //   store.dispatch({ type: 'reset'})
  // }
  return (
    <Router>
        
      <div className="app">
        <Header />
        <Home />
        
      </div>
      {/* <button onClick={handleC}>+</button>
      <button onClick={handleT}>-</button>
      <button onClick={handleR}>0</button> */}
    </Router>
  );
}

export default App;
