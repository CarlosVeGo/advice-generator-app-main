const container = document.querySelector(".container");
const adviceNumber = document.querySelector(".advice-number");
const adviceContent = document.querySelector("p");
const button = document.querySelector("button");
const apiLink = `https://api.adviceslip.com/advice`;
let numero;
let consejo;

button.addEventListener("click",() =>{
    
    adviceContent.textContent = `Loading...`;

    fetch(apiLink).then((data)=>data.json().then((res)=>{
        
        numero = res.slip.id;
        consejo = res.slip.advice;
        
        console.log(res);
        console.log(numero);
        console.log(consejo);
        
        adviceNumber.textContent= `advice #${numero}`
        adviceContent.textContent=`${consejo}`;

        
    })).catch((err)=>
        {
            return adviceContent.textContent = `try again later`;
    })
})