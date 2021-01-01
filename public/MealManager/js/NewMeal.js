Date.prototype.toDateString = function ()
{
    return this.getFullYear().toString() +
        ('0' + (this.getMonth() + 1)).slice(-2).toString() +
        ('0' + this.getDate()).slice(-2).toString();
};

let name;
let date = new Date();
let mealType = "";

updateMealName();

const datepickerElement = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(datepickerElement, {
    // options here
    buttonClass: 'btn',
    container: '#newMealModal',

    autohide: true,
    format: 'yyyy년 mm월 dd일 DD',
    language: 'ko',
    todayHighlight: true,
    disableTouchKeyboard: true,
    orientation: 'bottom auto',
});
datepicker.setDate(date)

datepickerElement.addEventListener('changeDate', onDateChanged)

datesElem = document.getElementsByClassName('datepicker-cell day')
for(let i = 0;i < datesElem.length;i++)
{
    let elem = datesElem.item(i)
    elem.setAttribute('onClick', 'onDateChanged()')
}

function updateMealName()
{
    if (mealType === "") name = date.toDateString() + " 급식사진";
    else name = date.toDateString() + " " + mealType + " 급식사진";
    document.getElementById('newMealName').setAttribute('value', name);
}

function onMealTypeChecked(value)
{
    mealType = value;
    updateMealName();
}

function onDateChanged()
{
    date = datepicker.getDate();
    updateMealName();
}

function loadImageFile(event)
{
    const output = document.getElementById('previewImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () =>
    {
        URL.revokeObjectURL(output.src) // free memory
    }
}

menuCnt = 0;
snackCnt = 0;

function newmenu()
{
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
    // BUGGY PART
    inputElement.onchange = newmenu;

    let label = document.createElement("label");
    label.setAttribute('for', id);
    label.innerHTML = '메뉴명'

    div.appendChild(inputElement);
    div.appendChild(label);
    document.getElementById('menus').appendChild(div);
    inputElement.focus();
}

function newsnack()
{

}
function onSnackCheckboxChange(state)
{
    // TODO
    document.getElementById('snack0').disabled = !state;
}