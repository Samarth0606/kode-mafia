import React, { useEffect, useState } from 'react'

function Timer() {
    let [time , setTime] = useState(0);

    // useEffect(function(){
    //     let id = setInterval(function(){
    //         setTime(time+1)
    //     } , 1000)
    //     //cleanup function
    //     return ()=>{
    //         clearInterval(id)
    //     }
    // } , [time])


    // ---------
    useEffect(function(){
        setTimeout(function(){
            setTime(time+1)
        } , 1000)
    } , [time])

  return (
    <div>Timer : {time}</div>
  )
}

export default Timer