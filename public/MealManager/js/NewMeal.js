Date.prototype.getFullYearString = function () {
    return this.getFullYear().toString();
}
Date.prototype.getDateString = function() {
    return ('0' + this.getDate()).slice(-2).toString();
}
Date.prototype.getMonthString = function() {
    return ('0' + (this.getMonth() + 1)).slice(-2).toString();
}
Date.prototype.toDateString = function (delimiter) {
    if(delimiter === undefined) delimiter = ''
    return this.getFullYearString() + delimiter +
        this.getMonthString() + delimiter +
        this.getDateString();
};

let name;
let date = new Date();
let mealType = "";

// TODO: wrong date BUG
document.getElementById('newMealDate').value = date.toDateString('-')

updateMealName();

function updateMealName() {
    if (mealType === "") name = date.toDateString() + " 급식";
    else name = date.toDateString() + " " + mealType + " 급식";
    document.getElementById('newMealFolderName').setAttribute('value', date.toDateString('-').substring(0, 7))
    document.getElementById('newMealName').setAttribute('value', name);
    document.getElementById('exampleModalLabel').innerHTML = name
}

function onMealTypeChecked(value) {
    mealType = value;
    updateMealName();
}

function onDateChanged() {
    const dateString = document.getElementById('newMealDate').value
    const year = parseInt(dateString.substring(0, 4))
    const month = parseInt(dateString.substring(5, 7))
    const day = parseInt(dateString.substring(8))
    date = new Date(year, month - 1, day)
    updateMealName();
}

function loadImageFile(event) {
    const output = document.getElementById('previewImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
        URL.revokeObjectURL(output.src) // free memory
    }
}

let menuCnt = 0;
let snackCnt = 0;

function newmenu() {
    menuCnt++;
    id = 'menu' + menuCnt;
    let div = document.createElement("div");
    div.setAttribute('class', 'form-floating mb-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('id', id);
    inputElement.setAttribute('name', 'menu');
    inputElement.setAttribute('placeholder', '메뉴명을 입력하세요');
    inputElement.setAttribute('onKeyPress', ' {e => {if (e.key === \'Enter\') e.preventDefault();}}')
    // TODO: BUG
    inputElement.onchange = newmenu;

    let label = document.createElement("label");
    label.setAttribute('for', id);
    label.innerHTML = '메뉴명'

    div.appendChild(inputElement);
    div.appendChild(label);
    document.getElementById('menus').appendChild(div);
    inputElement.focus();
}

function newsnack() {

}

function onSnackCheckboxChange(state) {
    // TODO
    document.getElementById('snack0').disabled = !state;
}