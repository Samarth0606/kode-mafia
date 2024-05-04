let arr = [
  "https://plus.unsplash.com/premium_photo-1675629519404-187e26d24194?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1714652233130-5618e3384f3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1714745455353-f47a2e2b5647?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673014201777-ce786c26fe40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
];

let num = 0;

let imgg = document.querySelector("img");

let id = setInterval(function () {
  imgg.setAttribute("src", arr[num]);
  num = (num + 1) % arr.length;
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 30000);
