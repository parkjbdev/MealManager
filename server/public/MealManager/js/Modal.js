let name;
let modalDate;
let mealType = "";
let menuCnt = 0;
let snackCnt = 0;

function newMealModalInit() {
    initModal()
    const url = "./process/NewMeal"
    mealForm.onsubmit = function (event) {
        event.preventDefault();
        const formData = new FormData(mealForm)

        fetch(url, {
            method: 'post',
            body: formData
        })
            .then(r => r.json())
            .then(value => {
                alert(value.message)
                if (value.status === 200) {
                    bootstrap.Modal.getInstance(mealModal).hide()
                    initModal();
                    refreshMeal();
                }
            })
            .catch(console.log)
    }
}

function editMealModalInit(meal) {
    initModal(meal)

    mealImg.required = false
    mealFormDate.disabled = 'true'
    mealFormLunchRadio.disabled = 'true'
    mealFormDinnerRadio.disabled = 'true'

    //TODO: fetch
    const url = './'
    mealForm.onsubmit = function (event) {
        event.preventDefault();
        const formData = new FormData(mealForm)

        console.log(formData)

        fetch(url, {
            method: 'patch',
            body: formData
        })
            .then(r => r.json())
            .then(value => {
                alert(value.message)
                if (value.status === 200) {
                    bootstrap.Modal.getInstance(mealModal).hide()
                    initModal();
                    refreshMeal();
                }
            })
            .catch(console.log)
    }
}

function initModal(meal) {
    mealForm.reset()

    mealImg.required = true
    mealFormDate.disabled = false
    mealFormLunchRadio.disabled = false
    mealFormDinnerRadio.disabled = false

    if (meal === undefined) {
        initImg()
        initDate()
        initMealType()
        initMenus()
        initSnacks()
    } else {
        initImg(`./${meal.imgPath}`)
        initDate(new Date(meal.dateYear, meal.dateMonth - 1, meal.dateDay))
        initMealType(meal.mealType)
        initMenus(meal.menus)
        initSnacks(meal.snacks)
    }

    updateMealName()
    updateDate()
}

function initImg(path) {
    if (path === undefined) path = './img/no-image.png'
    mealFormPreviewImg.src = path
}

function initDate(_date) {
    if (_date === undefined) modalDate = new Date()
    else modalDate = _date
    mealFormDate.value = modalDate.toDateString('-')
}

function initMealType(_mealType) {
    if (_mealType === undefined) {
        mealType = ""
        return
    }
    mealType = _mealType
    if (mealType === 'lunch') mealFormLunchRadio.checked = true
    else if (mealType === 'dinner') mealFormDinnerRadio.checked = true
}

function initMenus(menus) {
    menuCnt = 0;
    clear(mealFormMenus)
    if (menus === undefined) {
        newMenu()
        return
    }
    menus.forEach(menu => newMenu(menu))
}

function initSnacks(snacks) {
    snackCnt = 0;
    clear(mealFormSnacks)
    if (snacks === undefined) return
    snacks.forEach(snack => newSnack(snack))
}

function translate(_mealType) {
    if (_mealType === 'lunch') return '점심'
    else if (_mealType === 'dinner') return '저녁'
    else return _mealType
}

function updateMealName() {
    if (mealType === "") name = `${modalDate.toDateString()} 급식`
    else name = `${modalDate.toDateString()} ${translate(mealType)} 급식`;
    mealFormName.value = name;
    mealFormModalLabel.innerHTML = name
}

function updateDate() {
    mealFormDateYear.value = modalDate.getFullYearString()
    mealFormDateMonth.value = modalDate.getMonthString()
    mealFormDateDay.value = modalDate.getDateString()
}

function loadImageFile(event) {
    const output = mealFormPreviewImg;
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => URL.revokeObjectURL(output.src) // free memory
}

function onDateChanged() {
    const [year, month, day] = getDate(mealFormDate)
    modalDate = new Date(year, month - 1, day)
    updateMealName();
    updateDate();
}

function onMealTypeChecked(value) {
    mealType = value;
    updateMealName();
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
    if (value) inputElement.value = value
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
    if (value) inputElement.value = value
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

