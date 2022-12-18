
import React,{useState} from 'react'

function AppleComponent() {

  const [numberOfApples, setNumberOfApples] = useState(0)
    function appleDisplay(numberOfApples){
        if(numberOfApples === 0 || numberOfApples === 1){
          return "erfan has 1 apples";
        }
        else if (numberOfApples > 1){
          return 'erfan hassss 3 apples';
        }
      }
  return (
    <>
    <div>
        <h1>{appleDisplay(numberOfApples)}</h1>
    </div>
    
    <button onClick={() => setNumberOfApples(currentValue => currentValue + 1)} className='add-btn'>
      increase
    </button> 
    <button className='decrease-btn'>decrease</button>


    </>
    
  )
}

export default AppleComponent



