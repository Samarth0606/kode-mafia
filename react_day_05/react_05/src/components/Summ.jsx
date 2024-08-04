// import React, { useState } from 'react'

// function Summ() {
//     let [inp , setInp] = useState(0);
//     let [count , setCount] = useState(0);
//     function handleChange(e){
//         setInp(e.target.value)
//     }
//     function handleCount(){
//         setCount(count+1)
//     }
//     let ans = 0;
//     for(let i=1;i<=inp;i++){
//         console.log("mai chal gya")
//         ans=ans+i;
//     }
//   return (
//     <div>
//         <input onChange={handleChange} type="number" value={inp}/>
//         <h1>Sum : {ans}</h1>
//         <button onClick={handleCount}>Counter - {count}</button>
//     </div>
//   )
// }

// export default Summ



// ---------------------------


import React, { useMemo, useState } from 'react'

function Summ() {
    let [inp , setInp] = useState(0);
    let [count , setCount] = useState(0);
    function handleChange(e){
        setInp(e.target.value)
    }
    function handleCount(){
        setCount(count+1)
    }
    let out = useMemo(function(){
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("mai chal gya")
            ans=ans+i;
        }
        return ans
    } , [inp])

    
  return (
    <div>
        <input onChange={handleChange} type="number" value={inp}/>
        <h1>Sum : {out}</h1>
        <button onClick={handleCount}>Counter - {count}</button>
    </div>
  )
}

export default Summ