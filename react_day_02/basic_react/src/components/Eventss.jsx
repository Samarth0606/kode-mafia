import React from 'react'

function Eventss() {
    function handleDhakka(){
        console.log("chala ja brother...")
    }
function handleMukka(a,b){
    console.log(a+b)
}

  return (
    <div>
        <button onClick={handleDhakka}>click me</button>
        <button onClick={()=> handleMukka(10 , 20)}>daba dia maalik</button>
    </div>
  )
}

export default Eventss