const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);// check

button.addEventListener("click",function() {
    const cost = document.querySelector("input");
         console.log(cost.value * 0.15);
        let tip = (cost.value * 0.15).toFixed(2);
        output.innerText = `<h1> you should tip $ ${tip} on $ ${cost.value}</h1>`;
    }); 