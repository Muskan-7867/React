
import { Input } from './component/Input';
import { Form } from './component/Form';
import Login from './component/Login';
import  Stopwatch  from "./component/Stopwatch";
import { Movies } from './component/Movies';
import { Fragment } from './component/Fragment';
import Lifting from "../../react2/src/component/Lifting";
import './App.css';



function App() {
  function parentalert(data){
    alert(data)
  }
  return (
    <>
      <div>
        <h1>Pass data from child to parent</h1>
     
      <Lifting alert={parentalert} />
      </div>
    </>
  );
}

export default App;
