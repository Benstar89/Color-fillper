const btn = document.querySelector(".btn button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const numbers = [1 , 2 , 3 , 4, 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , "D" , "E" , "F"];
btn.addEventListener("click" , () => {
    let hex = "#";
    for(let i = 0 ; i < 6 ; i++){
        hex += numbers[Math.floor(Math.random() * numbers.length)];
        
    }
    body.style.background = hex;
    h1.innerHTML = `<h1>The Hex Color Is : ${hex}</h1>`
})
