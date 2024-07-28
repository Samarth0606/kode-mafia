import React, { useState } from 'react'

function Counter() {
    let count = 0;
    let [counter , setCounter] = useState(count);
    function handleClickPlus(){
        console.log(counter , '1')
        setCounter(counter+1) // 0 + 1

        console.log(counter , '2')
        setCounter(counter+1) // 0 + 1

        console.log(counter , '3')
        setCounter(counter+1) // 0 + 1

        console.log(counter , '4')
    }
    function handleClickMinus(){
        setCounter((counter)=>counter-1) // 0 + 1 = 1
        setCounter((counter)=>counter-1) // 1 + 1 = 2
        setCounter((counter)=>counter-1) // 2 + 1 = 3
    }
  return (
    <div>
        <button onClick={handleClickPlus}>+</button>
        <h1>{counter}</h1>
        <button onClick={handleClickMinus}>-</button>
    </div>
  )
}

export default Counter