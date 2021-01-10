'use strict'

async function createCardElem(name, imgsrc, menus, snacks) {
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
    h5.innerHTML = name

    let pMenu = document.createElement('p');
    pMenu.setAttribute('class', 'card-text lead');
    pMenu.innerHTML = menus;

    let pSnack = document.createElement('p');
    pSnack.setAttribute('class', 'card-text lead');
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
function attachCard(card) {
    document.getElementById('cards').appendChild(card)
}

// FILE LOAD
function openMeal(year, month) {
    async function fetchMeals(year, month) {
        let jsonPath = `./meals/${year}/${month}/`
        const response = await fetch(jsonPath)
        return await response.json()
    }

    fetchMeals(year, month)
        .then(meals => {
            meals.forEach(meal => {
                const year = meal.dateYear;
                const month = ('0' + meal.dateMonth).slice(-2).toString();
                const date = ('0' + meal.dateDay).slice(-2).toString();
                createCardElem(meal.name, `./img/${year}/${month}/${date}/${meal.mealType}`, meal.menus, meal.snacks)
                    .then(attachCard)
            })
        })
}