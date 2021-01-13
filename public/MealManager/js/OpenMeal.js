'use strict'

async function createCardElem(meal) {
    const id = meal._id
    const name = meal.name
    const imgsrc = `./${meal.imgPath}`
    const menus = meal.menus
    const snacks = meal.snacks

    let div_col = document.createElement('div');
    div_col.setAttribute('class', 'col-sm-6 col-lg-4 mb-4 meal-card');

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
    pMenu.setAttribute('class', 'card-text lead');
    pMenu.innerHTML = menus;

    let pSnack = document.createElement('p');
    pSnack.setAttribute('class', 'card-text lead');
    pSnack.innerHTML = snacks;

    let div_buttons = document.createElement('div')
    div_buttons.className = 'text-end'

    // let modifyButton = document.createElement('a')
    // modifyButton.className = 'btn btn-outline-primary ms-1'
    // modifyButton.innerHTML = '수정'
    // modifyButton.onclick = () => {
    //     // TODO: HTTP PATCH
    // }

    let deleteButton = document.createElement('a')
    deleteButton.className = 'btn btn-outline-danger ms-1'
    deleteButton.innerHTML = '삭제'
    deleteButton.onclick = () => {
        if (confirm(`${name} 삭제할까요?`)) {
            fetch(`./${id}`, {
                method: 'Delete'
            }).then(alert(`${name} 삭제되었습니다`))
            location.reload()
        }
    }

    // div_buttons.appendChild(modifyButton)
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

function noMeal(message) {
    const p = document.createElement('p')
    p.className = 'fs-1 text-secondary'
    p.innerHTML = message

    const div = document.createElement('div')
    div.className = 'position-absolute top-50 start-50 translate-middle'
    div.appendChild(p)

    return div
}

function cleardiv(elementId) {
    const element = document.getElementById(elementId)
    while(element.hasChildNodes())  element.removeChild(element.firstChild)
}

// FILE LOAD
function openMeal(year, month) {
    let jsonPath = `./meals/${year}/${month}/mealInfo`

    fetch(jsonPath)
        .then(res => res.json())
        .then(meals => {
            cleardiv('cardContainer')
            if(meals.message !== undefined) {
                document.getElementById('cardContainer').appendChild(noMeal(meals.message))
                return
            }
            meals.forEach(meal => {
                createCardElem(meal).then(attachCard)
            })
        })
}