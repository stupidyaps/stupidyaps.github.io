let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  // console.log(x,y);

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link=>{
  link.addEventListener("mouseover", ()=>{
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", ()=>{
    innerCursor.classList.remove("grow");
  });
})

let links2 = Array.from(document.querySelectorAll("li"));

console.log(links2);

links2.forEach(link2=>{
  link2.addEventListener("mouseover", ()=>{
    innerCursor.classList.add("grow");
  });
  link2.addEventListener("mouseleave", ()=>{
    innerCursor.classList.remove("grow");
  });
})