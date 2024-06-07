const buttonsEle = document.querySelectorAll("button");

// console.log(buttonsEle);

const inputEle = document.getElementById("result");

for(let i = 0; i < buttonsEle.length; i++){
    buttonsEle[i].addEventListener("click", ()=>{
        const buttonsVal = buttonsEle[i].textContent;
        if(buttonsVal === "C"){
            clearResult();
        }
        else if(buttonsVal === "="){
            calculateValue();
        }
        else{
            addValue(buttonsVal);
        }
    });
}

function clearResult(buttonsVal){
    inputEle.value = "";
}
function calculateValue(buttonsVal){
    inputEle.value = eval(inputEle.value);
}

function addValue(buttonsVal){
    inputEle.value += buttonsVal;
}