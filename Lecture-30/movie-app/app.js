// https://api.tvmaze.com/search/shows?q=batman


let inpEl = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')

btn.addEventListener('click' , function(){
    let searchText = inpEl.value;
    let data = fetchData(searchText);
    inpEl.value = "";
})
// ------------

// fetch
// function fetchData(searchText){
//     fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(finalData){
//         console.log(finalData , "final")
//     })
// }
// ------------
// axios
function fetchData(searchText){
    // api call
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        // console.log(response.data , "searched text")
        manipulateDom(response.data)
    })
}

function manipulateDom(datas){
    while(list.firstChild){
        list.firstChild.remove()
    }
    for(let item of datas){
        console.log(item)
        let figure = document.createElement('figure');
        figure.innerHTML = `
            <img src=${item.show.image.medium} alt="">
            <br>
            <h2>NAME: ${item.show.name} </h2>
            <h3>LANGUAGE: ${item.show.language} </h3>
        `
        list.append(figure)
    }
}







