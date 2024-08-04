import React, { useState } from 'react'
import MyMemoo from './components/Memoo'
import Inputss from './components/Inputss';
import Summ from './components/Summ';
import Callbacks from './components/Callbacks';
import Refs from './components/Refs';

function App() {
  // let [username , setUsername] = useState("samarth");
  // function handleNaam(){
  //   setUsername(Math.floor(Math.random()*10))
  // }
  return (
    <div>
      <Refs />
      {/* <Callbacks /> */}
      {/* <Summ /> */}
      {/* <Inputss /> */}
      {/* <MyMemoo naam={username} />
      <button onClick={handleNaam}>naam badal do</button>
      <MyMemoo naam="maverick" />
      <MyMemoo naam="gaurav" />
      <MyMemoo naam="gunjan" />
      <MyMemoo naam="kanak" /> */}
    </div>
  )
}

export default App