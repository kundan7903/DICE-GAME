
import './App.css';
import { useState } from 'react';

import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';

function App() {
 const [isGameStarted,setIsGameStarted] = useState(false);

 const toggleGamePlay = ()=> {
  setIsGameStarted((prev) => !prev)
 };
  

  return (
    <container className='overflow-y-hidden'>
    {
      isGameStarted ? <GamePlay/> :<StartGame toggle={toggleGamePlay} />
    }
    
    </container>
  );
}

export default App;
