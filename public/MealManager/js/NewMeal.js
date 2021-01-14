'use strict'

let name;
let date = new Date();
let mealType = "";
let menuCnt = 0;
let snackCnt = 0;

initModal()

function initModal() {
    document.getElementById('newMealForm').reset()
    document.getElementById('menus').innerHTML = ''
    document.getElementById('snacks').innerHTML = ''

    date = new Date()
    menuCnt = 0;
    snackCnt = 0;
    mealType = "";
    newmenu()

    document.getElementById('newMealDate').value = date.toDateString('-')
    document.getElementById('previewImg').setAttribute('src', './img/no-image.png')

    updateMealName()
}

function updateMealName() {
    if (mealType === "") name = date.toDateString() + " 급식";
    else name = date.toDateString() + " " + translate(mealType) + " 급식";
    document.getElementById('newMealDateYear').setAttribute('value', date.getFullYearString())
    document.getElementById('newMealDateMonth').setAttribute('value', date.getMonthString())
    document.getElementById('newMealDateDay').setAttribute('value', date.getDateString())
    document.getElementById('newMealName').setAttribute('value', name);
    document.getElementById('newMealModalLabel').innerHTML = name
}

function translate(mealType) {
    if (mealType === 'lunch') return '점심'
    else if (mealType === 'dinner') return '저녁'
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

function newmenu() {
    menuCnt++;
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2 newmenus');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('name', 'menu');
    inputElement.setAttribute('placeholder', '메뉴 입력');
    inputElement.onkeydown = (event) => {
        const charCode = event.which || event.keyCode
        if (!(event.shiftKey && charCode === 9) && (charCode === 9)) {
            event.preventDefault()
            newmenu()
        }
    }

    let div_button = document.createElement("div")
    div_button.setAttribute('class', 'input-group-btn')

    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-danger ms-2');
    button.onclick = function () {
        if (menuCnt - 1 === 0) {
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
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('name', 'snack');
    inputElement.setAttribute('placeholder', '간식 입력');

    let div_button = document.createElement("div")
    div_button.setAttribute('class', 'input-group-btn')

    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-danger ms-2');
    button.onclick = function () {
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

$(document).ready(function () {
    $('#newMealForm').submit(function (event) {
        event.preventDefault();
        const formData = new FormData(this)
        const url = $(this).attr('action')
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            contentType: false,
            processData: false,
            success: (data) => {
                alert(data.message)
                if (data.status === 200) {
                    $('#newMealModal').modal('hide')
                    initModal()
                    refreshMeal()
                }
            },
            error: (data) => {
                alert(data)
            },
        })
    })
})