'use strict'

function createCardElem(name, imgsrc, menus, snacks) {
    let div_col = document.createElement('div');
    div_col.setAttribute('class', 'col-sm-6 col-lg-4 mb-4');

    let div_card = document.createElement('div');
    div_card.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('alt', name);
    img.setAttribute('src', imgsrc);
    img.setAttribute('class', 'card-img-top');

    let div_cardBody = document.createElement('div');
    div_cardBody.setAttribute('class', 'card-body');

    let h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.innerHTML = name;

    let pMenu = document.createElement('p');
    pMenu.setAttribute('class', 'card-text');
    pMenu.innerHTML = menus;

    let pSnack = document.createElement('p');
    pSnack.setAttribute('class', 'card-text');
    pSnack.innerHTML = snacks;

    let div_buttons = document.createElement('div')
    div_buttons.className = 'text-end'

    let modifyButton = document.createElement('a')
    modifyButton.className = 'btn btn-outline-primary ms-1'
    modifyButton.innerHTML = '수정'
    modifyButton.onclick = () => {
        // TODO: HTTP PATCH
    }

    let deleteButton = document.createElement('a')
    deleteButton.className = 'btn btn-outline-danger ms-1'
    deleteButton.innerHTML = '삭제'
    deleteButton.onclick = () => {
        // TODO: HTTP DELETE
    }

    div_buttons.appendChild(modifyButton)
    div_buttons.appendChild(deleteButton)

    div_cardBody.appendChild(h5);
    div_cardBody.appendChild(pMenu);
    div_cardBody.appendChild(pSnack);
    div_cardBody.appendChild(div_buttons);
    div_card.appendChild(img);
    div_card.appendChild(div_cardBody);
    div_col.appendChild(div_card);

    return div_col;
}

function attachCard(name, imgsrc, menus, snacks) {
    let card = createCardElem(name, imgsrc, menus, snacks)
    document.getElementById('cards').appendChild(card)
}

// FILE LOAD
function openMeal(year, month) {
    let jsonPath = `./meals/${year}/${month}/`

    fetch(jsonPath)
        .then(res => res.json())
        .then(value => {
            for (let i = 0; i < value.length; i++) {
                let mealType = value[i].mealType
                if (mealType === '점심') mealType = 'lunch'
                else if (mealType === '저녁') mealType = 'dinner'
                attachCard(value[i].name, `/MealManager/img/${value[i].dateYear}/${value[i].dateMonth}/${value[i].dateDay}/${mealType}`, value[i].menus, value[i].snacks)
            }
        })
}