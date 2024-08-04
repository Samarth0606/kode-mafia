import React, { useState } from 'react'

function Inputss() {
    let [inp , setInp] = useState("");

    function handleInp(e){
        console.log(e.target.value)
        setInp(e.target.value)
    }
  return (
    <div>
        <h1>{inp}</h1>
        <input onChange={handleInp} type="text" value={inp} />
    </div>
  )
}

export default Inputss