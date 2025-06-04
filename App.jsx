import { useState } from 'react'
import './App.css'
function App(){
const[counter,setCounter] = useState(0);
const[step,setStep] = useState(1);
const minValue=0;

const handleIncrement = ()=>{
  setCounter(prevCounter => prevCounter + step);
}

const handleDecrement = () => {
  if(counter - step >= minValue){
    setCounter(prevCounter => prevCounter - step);
  }
}

const handleReset =()=>{
  setCounter(0);
}

const handleStepChange = (event) =>{
  setStep(Number(event.target.value));
}
return(
  <div style={{textAlign:'center', marginTop:'50px'}}>
     <h1>Counter Display</h1>
     <span style={{fontSize:'30px', margin:'20px'}}>{counter}</span>
     <br></br>
     <br></br>
    
     <div className='button'>
      <button className='button1' onClick={handleIncrement}>Increase by {step}</button>
      <button className='button2' onClick={handleDecrement}>decrease by {step}</button>
      <button className='button3' onClick={handleReset}>Reset</button>
     </div>
<br></br>
     <br></br>
     <div>
      <label>Increase/Decrease by Step:<input type='number' value={step} onChange={handleStepChange} min='1'></input></label>
     </div>
  </div>
)
}
export default App;