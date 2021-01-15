function clear(element) {
    element.innerHTML = ''
}

function centerElem(element) {
    const div = document.createElement('div')
    div.className = 'position-absolute top-50 start-50 translate-middle'
    div.appendChild(element)

    return div
}