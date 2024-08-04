// import React, { useRef } from 'react'

// function Refs() {
//     let salary = 2000
//     let spanEl = useRef()
//     setTimeout(function(){
//         spanEl.current.innerHTML = "20"
//     } , 5000)
//   return (
//     <div>
//         <h1>Salary:  <span ref={spanEl}>{salary}</span>  </h1>
//     </div>
//   )
// }

// export default Refs

// -------------


import React, { useRef, useState } from 'react'

function Refs() {
    let counter = useRef(0);
    function handleRef(){
        console.log("mai hu useRef")
        counter.current++;
    }
    let [count , setCount] = useState(0);
    function handleCount(){
        console.log("mai hu useState")
        setCount(count+1)
    }
  return (
    <div>
        <h1>
            <button onClick={handleCount}>Counter-{count}</button>  
            <button onClick={handleRef}>Counter2-{counter.current}</button>  
        </h1>
    </div>
  )
}

export default Refs