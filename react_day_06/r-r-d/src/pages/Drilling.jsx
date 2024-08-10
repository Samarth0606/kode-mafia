// import React from 'react'

// function A() {
//   let drill = 100;
//   return <> <div>A</div>   <B p={drill} /> </>
// }
// function B({p}) {
//     return <> <div>A</div> <C p={p} /> </>
// }
// function C({p}) {
//     return <> <div>A</div> <D p={p} /></>
// }
// function D({p}) {
//     // console.log(drill)
//     return <> <div>D : {p} </div> </>
// }

// export default A;


// ------------------


import React, { createContext, useContext } from 'react'

let DataContext = createContext(0);
function A() {
  let drill = 100;
  return <> 
  <DataContext.Provider value={drill}>  
    <div>A</div>   <B /> 
  </DataContext.Provider>
 </>
}
function B() {
    return <> <div>A</div> <C /> </>
}
function C() {
    return <> <div>A</div> <D /></>
}
function D() {
    let data = useContext(DataContext)
    return <> <div>D : {data}  </div> </>
}

export default A;