// import React, { memo, useState } from 'react'

// function Callbacks() {
//     let [count , seCount] = useState(0);
//     function handleClick(){
//         seCount(count+1);
//     }
//     let a = function(){
//         console.log("bhaukaal")
//     };
//   return (
//     <div>
//         <Sam b={a} />
//         <button onClick={handleClick}>Counter-{count}</button>
//     </div>
//   )
// }
// let Sam = memo(function ({b}){
//     console.log("mai hu gian")
//     return(
//         <h1>tamatar - {b()}</h1>
//     )
// })

// export default Callbacks


// ----------------------------


import React, { memo, useCallback, useState } from 'react'

function Callbacks() {
    let [count , seCount] = useState(0);
    function handleClick(){
        seCount(count+1);
    }
    let a = useCallback(function(){
        console.log("bhaukaal")
    } , [])
    
  return (
    <div>
        <Sam b={a} />
        <button onClick={handleClick}>Counter-{count}</button>
    </div>
  )
}

// useCallback(function(){} , [])
let Sam = memo(function ({b}){
    console.log("mai hu gian")
    return(
        <h1>tamatar - {b()}</h1>
    )
})

export default Callbacks