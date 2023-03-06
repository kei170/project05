import { useState } from "react";
import Button from "./Button";
import Border from "./Border";
// import Dics from "./Dics";
import './App.css';

function random(n){
  return Math.ceil(Math.random()*n)
}
  // let num = 0;
function App(){
  const [num,setNum] = useState(0);
  const [myHistory,setMyHistory] = useState([]);
  const [otherHistory,setOtherHistory] = useState([]);

  function handleClick(){
    const nextMyNum = random(9);
    const nextOtherNum = random(9);
    setMyHistory([...myHistory,nextMyNum])
    setOtherHistory([...otherHistory,nextOtherNum])
  }

  function resetClick(){
    setMyHistory([])
    setOtherHistory([])
  }


  function eventClick(){
    // const num = 0;
    //   {num <= '5'? (
    //     <h1>no</h1>
    //   ) : (
    //     <h2>yes</h2>
    //   )}
      setNum(num + 1);
      
  }

  return (
    <div id="box">
      <div>{num}</div>
      <div id="btn">
        <Button onClick={handleClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
        <Button onClick={eventClick}>event</Button>
      </div>
    <div id="container">
      <Border name="A팀" color="blue" gameHistory={myHistory}/>
      <Border name="B팀" color="red" gameHistory={otherHistory}/>
  </div>
  </div>
  );
}

export default App;