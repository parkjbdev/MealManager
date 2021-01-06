Date.prototype.getFullYearString = function () {
    return this.getFullYear().toString();
}
Date.prototype.getMonthString = function() {
    return ('0' + (this.getMonth() + 1)).slice(-2).toString();
}
Date.prototype.getDateString = function() {
    return ('0' + this.getDate()).slice(-2).toString();
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

document.getElementById('newMealDate').value = date.toDateString('-')
updateMealName();

function updateMealName() {
    if (mealType === "") name = date.toDateString() + " 급식";
    else name = date.toDateString() + " " + mealType + " 급식";
    document.getElementById('newMealDateYear').setAttribute('value', date.getFullYearString())
    document.getElementById('newMealDateMonth').setAttribute('value', date.getMonthString())
    document.getElementById('newMealDateDay').setAttribute('value', date.getDateString())
    document.getElementById('newMealName').setAttribute('value', name);
    document.getElementById('exampleModalLabel').innerHTML = name
}

function translate(mealType: string) {
    if(mealType === '점심')   return 'lunch'
    else if(mealType === '저녁')  return 'dinner'
    else return mealType
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

if(menuCnt === 0)    newmenu()

function newmenu() {
    menuCnt++;
    id = 'menu' + menuCnt;
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('id', id);
    inputElement.setAttribute('name', 'menu');
    inputElement.setAttribute('placeholder', '메뉴 입력');

    let div_button = document.createElement("div")
    div_button.setAttribute('class', 'input-group-btn')

    let button = document.createElement("button");
    button.setAttribute('id', 'del_'+id);
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-danger ms-2');
    button.onclick = function() {
        if(menuCnt - 1 === 0)
        {
            alert('최소 1개의 메뉴는 있어야 합니다!')
            return
        }
        menuCnt--;
        document.getElementById('menus').removeChild(div)
    }
    button.innerHTML = '삭제';

    div_button.appendChild(button)

    div.appendChild(inputElement);
    div.appendChild(div_button);
    document.getElementById('menus').appendChild(div);
    inputElement.focus();
}
function newsnack() {
    snackCnt++;
    id = 'snack' + menuCnt;
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('id', id);
    inputElement.setAttribute('name', 'snack');
    inputElement.setAttribute('placeholder', '간식 입력');

    let div_button = document.createElement("div")
    div_button.setAttribute('class', 'input-group-btn')

    let button = document.createElement("button");
    button.setAttribute('id', 'del_'+id);
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-danger ms-2');
    button.onclick = function() {
        snackCnt--;
        document.getElementById('snacks').removeChild(div)
    }
    button.innerHTML = '삭제';

    div_button.appendChild(button)

    div.appendChild(inputElement);
    div.appendChild(div_button);
    document.getElementById('snacks').appendChild(div);
    inputElement.focus();
}