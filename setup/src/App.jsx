// import{ Counters } from './components/Counters';
// import Funcomponents from "./components/Funcomponents";
// import { Counter } from "./components/Counter";
// import Comp from './components/Comp';
import  Profile   from './components/Profile'
import Nestedif   from "./components/nestedif";

// import Comp from './components/Comp';              //class component
// import  Profile   from './components/Profile';        //ifelse
// import Nestedif   from "./components/nestedif";       //nestedif
import Student from "./components/Student";
export const App = () => {
  return (
  
    <div className="App">
      <h1>Props in react</h1>
     {/* <Counters />
    <div className="App">
      <h1>Props in react</h1>
      {/* <Counters />
      <Funcomponents />
      <Comp />
      <Counter /> */}
      {/* <Profile />
      <Nestedif />
      <Counter />
       <Profile />
      <Nestedif /> */} 

    
      <Student name={"Muskan"} email='muskan@gmail.com'/>
      <Student name={"Deepak"}  email='deepak@gmail.com'/>
    </div>
  );
};
