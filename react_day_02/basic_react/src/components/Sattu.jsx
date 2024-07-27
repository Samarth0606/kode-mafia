import React from 'react'

function Sattu() {

    // let a = 10;
    // let b = "sam";
    // let c = false;
    // let d = true;
    // let e = null;
    // let f = undefined;

    let arr = [1,2,3];
    let obj = {a:10};
  return (
    <div>
        <h1>arr - {arr} </h1>
        <h1>arr - {arr[0]} </h1>
        <h1>arr - {arr['0']} </h1>
        {/* <h1>obj - {obj} </h1> */}
        <h1>obj - {obj.a} </h1>

        {/* <h1>a - {a} </h1> */}
        {/* <h1>b - {b} </h1>  */}
        {/* <h1>c - {JSON.stringify(c)} </h1>  */}
        {/* <h1>d - {JSON.stringify(d)} </h1> */}
        {/* <h1>e - {e} </h1> */}
        {/* <h1>e2 - {JSON.stringify(e)} </h1> */}
        {/* <h1>f - {f} </h1> */}
        {/* <h1>f2 - {JSON.stringify(f)} </h1> */}
    </div>
  )
}

export default Sattu