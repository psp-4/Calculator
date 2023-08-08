const keys = document.querySelector("#functionality");

keys.addEventListener("click",e =>{
    if (e.target.matches(".btn")){
        const key = e.target;
        const action = key.dataset.action;
        displayedNum = document.querySelector("#top-field").innerText;
        if (!action){
            if (displayedNum==="0"){
                displayInTop(key.innerText);
            }
            else{
                displayInTop(displayedNum+=key.innerText);
            }
            
        }
        else if (action === "multiply"){
            displayInTop(displayedNum+="*");
        }
        else if (action === "divide"){
            displayInTop(displayedNum+="/");
        }
        else if (action === "add"){
            displayInTop(displayedNum+="+");
        }
        else if (action === "subtract"){
            displayInTop(displayedNum+="-");
        } 
        else if (action === "all-clear"){
            displayInTop("");
            displayInBottom("0");
        }
        else if (action === "decimal"){
            displayInTop(displayedNum+=".");
        }
        else if (action === "percent"){
            
        }
        else if (action === "equal"){
            var result=eval(displayedNum);
            if (result.toString().includes('.'))
                var resultNew = result.toFixed(2);
            else if (displayedNum.toString().includes('.'))
                var resultNew = result.toFixed(2);
            else
                var resultNew = result;
                displayInBottom("="+resultNew);
        }
        else if (action ==="backspace"){
            var strlen = displayedNum.length;
            displayInTop(displayedNum.substring(0,strlen-1));
        }
    }
})

// To display in top-row
function displayInTop(string){
    if (string.length>=14) {
        document.querySelector("#top-field").classList.add("more-small-text");
        document.querySelector("#top-field").textContent = string;
    }
    else if(string.length>=10){
        document.querySelector("#top-field").classList.remove("more-small-text");
        document.querySelector("#top-field").classList.add("small-text");
        document.querySelector("#top-field").textContent = string;
    }
    else{
        document.querySelector("#top-field").textContent = string;
        document.querySelector("#top-field").classList.remove("small-text");

    }
}
// To display in bottom-row
function displayInBottom(string){
    if (string.length>=14) {
        document.querySelector("#bottom-field").classList.add("more-small-text");
        document.querySelector("#bottom-field").textContent = string;
    }
    else if(string.length>=10){
        document.querySelector("#bottom-field").classList.remove("more-small-text");
        document.querySelector("#bottom-field").classList.add("small-text");
        document.querySelector("#bottom-field").textContent = string;
    }
    else{
        document.querySelector("#bottom-field").textContent = string;
        document.querySelector("#bottom-field").classList.remove("small-text");

    }
}

