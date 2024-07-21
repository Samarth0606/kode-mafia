
// let div = document.getElementById('root');
// let p = document.createElement('p');
// p.setAttribute('id' , 'sam')
// p.innerText = "hi from p using dom";

// div.append(p);

// -------------------------

let div = document.getElementById('root');

// for -> htmlFor
// class -> className
// create -> react

// let p = React.createElement('p' , null , "i am p from react");
// let p = React.createElement('p' , {id:"sam" , className:"vohra"} , "i am p from react");

// let p = React.createElement('p' , {id:"sam" , className:"vohra"} , React.createElement('span' , null , 'i am span'));


//jsx
let p = <p id="sam"> <span> i am a span</span></p>

// display -> reactdom
// div.render(p) //17
 

//18 compulsion
let rootEl = ReactDOM.createRoot(div);
rootEl.render(p)

// ----------------------------------








