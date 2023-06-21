// import logo from './logo.svg';
import './App.css';
import { continents, currencies } from './Components/loops';
import Pics from './Components/pictures';
import Header from './Components/header';
import { Condition } from './Components/conditional';
import Left_hearder from './Components/left-header';
import Right_header from './Components/right-header';
function App() {
  return (
    <div className="App">
    <div className='main-container'>
      <Header />
      <Left_hearder />
      <Right_header/>
      {/* <Pics /> */}
      <Condition />
      
    {/* {continents.map(continent =><h4>{continent}</h4> )} */}
    </div>
      {/* {Object.keys(currencies).map((key) =>
      <h4>{key}:{currencies[key]}</h4>)} */}
    </div>
  );
}

export default App;