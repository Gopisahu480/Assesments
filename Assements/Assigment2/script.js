let sentance = document.getElementById("sentance");
let character = document.getElementById("character");

let para = document.getElementById("para");

let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

submit.addEventListener('click', printSentance);
reset.addEventListener('click',resetAll);

function printSentance() {

    if (!((sentance.value).includes(character.value[0]))) {
        para.innerHTML = "The letter does not exist in the sentance";
    }
    else{
        let tempStr = "";
        let tempCount = (sentance.value).indexOf(character.value[0]);
        let tempEnd = sentance.value.length;

        for(let i = tempCount+1; i < tempEnd; i++ ){
            tempStr = tempStr + sentance.value[i];
        }
        para.innerHTML = tempStr;
    }
}

function resetAll(){
    para.innerHTML = "";
    sentance.value = "";
    character.value = "";
}