let name;
let mealType = "";
let menuCnt = 0;
let snackCnt = 0;

function initModal() {
    mealForm.reset()
    clear(mealFormMenus)
    clear(mealFormSnacks)
    menuCnt = 0;
    snackCnt = 0;
    mealType = "";
    date = new Date()
    newMenu()

    mealFormDate.value = date.toDateString('-')
    mealFormPreviewImg.setAttribute('src', './img/no-image.png')

    updateMealName()
}

function translate(mealType) {
    if (mealType === 'lunch') return '점심'
    else if (mealType === 'dinner') return '저녁'
    else return mealType
}

function updateMealName() {
    if (mealType === "") name = `${date.toDateString()} 급식`
    else name = `${date.toDateString()} ${translate(mealType)} 급식`;
    mealFormDateYear.value = date.getFullYearString()
    mealFormDateMonth.value = date.getMonthString()
    mealFormDateDay.value = date.getDateString()
    mealFormName.setAttribute('value', name);
    mealFormModalLabel.innerHTML = name
}

function onMealTypeChecked(value) {
    mealType = value;
    updateMealName();
}

function onDateChanged() {
    const [year, month, day] = getDate(mealFormDate)
    date = new Date(year, month - 1, day)
    updateMealName();
}

function loadImageFile(event) {
    const output = mealFormPreviewImg;
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => URL.revokeObjectURL(output.src) // free memory
}

function newMenu(value) {
    menuCnt++;
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('name', 'menu');
    inputElement.setAttribute('placeholder', '메뉴 입력');
    if(value)   inputElement.value = value
    inputElement.onkeydown = (event) => {
        const charCode = event.which || event.keyCode
        if (!(event.shiftKey && charCode === 9) && (charCode === 9)) {
            event.preventDefault()
            newMenu()
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
        mealFormMenus.removeChild(div)
    }
    button.innerHTML = '삭제';

    div_button.appendChild(button)

    div.appendChild(inputElement);
    div.appendChild(div_button);
    mealFormMenus.appendChild(div);
    inputElement.focus();
}

function newSnack(value) {
    snackCnt++;
    let div = document.createElement("div");
    div.setAttribute('class', 'input-group my-2');

    let inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('class', 'form-control');
    inputElement.setAttribute('name', 'snack');
    inputElement.setAttribute('placeholder', '간식 입력');
    if(value)   inputElement.value = value
    inputElement.onkeydown = (event) => {
        const charCode = event.which || event.keyCode
        if (!(event.shiftKey && charCode === 9) && (charCode === 9)) {
            event.preventDefault()
            newSnack()
        }
    }

    let div_button = document.createElement("div")
    div_button.setAttribute('class', 'input-group-btn')

    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-danger ms-2');
    button.onclick = function () {
        snackCnt--;
        mealFormSnacks.removeChild(div)
    }
    button.innerHTML = '삭제';

    div_button.appendChild(button)

    div.appendChild(inputElement);
    div.appendChild(div_button);
    mealFormSnacks.appendChild(div);
    inputElement.focus();
}

