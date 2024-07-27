import React from 'react'

function Nakul() {

    let rn = Math.floor(Math.random()*10);
    // let num = 7;
    // let el;
    // if(rn === num){
    //         el = <h1>LUCKY 7</h1>
    // }else{
    //     el = <h1>BETTER LUCK NEXT TIME</h1>
    // }
    
  return (
    <div>
       {/* your number is {rn} - {el} */}

        {rn}
        {
            ( rn === 7 ) ? <h1>LUCKY 7</h1> :  <h1>BETTER LUCK NEXT TIME</h1>
        }


    </div>
  )
}

export default Nakul