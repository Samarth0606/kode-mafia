// import React, { useState } from 'react'

// import { useState } from "react"

// function Student({naam , age}) {

//     function handleNaam(){
//         console.log(naam);
//         naam = "anonymous"
//         console.log(naam);
//     }

//   return (
//     <div>
//         <h1>Name: {naam} </h1>
//         <h1>Age:{age} </h1>

//         <button onClick={handleNaam} >Logout</button>
//     </div>
//   )
// }

// export default Student



import React, { useState } from 'react'

function Student({naam , age}) {

    let [naamm , setNaamm] = useState(naam)
    function handleNaam(){
        setNaamm('anonymous')
    }
    
  return (
    <div>
        <h1>Name: {naamm} </h1>
        <h1>Age:{age} </h1>

        {/* <button onClick={handleNaam} >Logout</button> */}
        <button onClick={()=> handleNaam()} >Logout</button>
    </div>
  )
}

export default Student