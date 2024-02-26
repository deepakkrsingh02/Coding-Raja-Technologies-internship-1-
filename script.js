function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder," "Enter here");

    let weOb = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNeWAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("aq");
    let weAddButton = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, aqAddButtonOb);

}
function generateCV(){
    let nameField = document.getElementById("nameField").Value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
}