import React, { useState } from 'react'



function Hero() {
  return (
    <div>
        <Sam username="champaklaal" />
        <BigBrotherSam naam="jhetalaal" />
        <Sam username="champaklaal2" />
        <Sam username="champaklaal3" />
    </div>
  )
}

function Sam({username}){
    return(
        <div>
            <h1>my name is : {username}</h1>
        </div>
    )
}
function BigBrotherSam({naam}){
    let [varNaam , setVarNaam] = useState(naam)
    function handleNaam(){
        setVarNaam(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Sam username={varNaam} />
            <button onClick={handleNaam}>Naam badal do</button>
                
        </div>
    )
}



// export default Hero

// --------------------------

import React, { useState } from 'react'



function Hero() {

    let [naam , setNaam] = useState('champaklaal')
    function handleClick(){
        setNaam(Math.floor(Math.random()*10))
    }

  return (
    <div>
        <Sam username={naam} />
        <button onClick={handleClick}>logout</button>
        <Sam username="champaklaal" />
        <Sam username="champaklaal" />
    </div>
  )
}

function Sam({username}){
    return(
        <div> Naam: {username} </div>
    )
}


export default Hero