import logo from './logo.svg';
import './App.css';
import Hello from './Greet.js';
import { useState } from 'react';

/*function Student(props){
  return <h2>Hello, {props.name}!</h2>;
}*/

/*function Student({name,age}){
  return(
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}*/

function Counter(){
  const[count,setCount]=useState(0);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(c=>c+1)}>Increase</button>
      <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

function App(){

  /*return(
    <Hello></Hello>
  )*/

  /*return(
    <div>
      <Student name="Rahul" age={20}/>
      <Student name="Priya" age={26}/>
      <Student name="Aman" age={28}/>
    </div>
  );*/

  /*function handleClick(){
    alert("Button Clicked");
  }
  return(
    <button onClick={handleClick}>
      Click Me
    </button>
  );*/

  /*function handleClick(event){
    console.log(event.type);
    console.log(event.target);
  }

  return(
    <button onClick={handleClick}>
      Click Me
    </button>
  );*/

}

//export default App;

export default Counter;