let dumy = [["Ram","Kumar","Delhi","India",],["Shyam","Thakur","Mumbai","Maharastra"],["Ramesh","Hooda","Panipat","Haryana"],["Susil","Shinde","Chennai","Tamilnadu"]];
let j = 0;
let table = document.getElementById("main-table");
let count = document.getElementsByTagName("tr");

let top1 = document.getElementById("add-at-top");
let bottom = document.getElementById("add-at-bottom");

bottom.addEventListener('click', function () {
    addInTable(count.length);
});

top1.addEventListener('click', function () {
    let temp = 1;
    addInTable(temp);
    for (let i = 2; i < count.length; i++) {
        count[i].firstElementChild.innerHTML = parseInt(count[i].firstElementChild.innerHTML) + 1;
    }
})

function addInTable(num){
    let newRow = table.insertRow(num);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);

    newCell1.innerHTML = num;
    // newCell2.innerHTML = dumy[j][0];
    // newCell3.innerHTML = dumy[j][1];
    // newCell4.innerHTML = dumy[j][2];
    // newCell5.innerHTML = dumy[j][3];

    j++;
    //return;
}