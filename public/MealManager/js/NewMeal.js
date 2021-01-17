'use strict'

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