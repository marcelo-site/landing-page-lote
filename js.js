const gallery = document.querySelectorAll('[data-gallery=""]')
const modalSrc = document.querySelector('#modal-src div')
const background = document.querySelector('#background')
const modal = document.querySelector('#modal')
const body = document.querySelector('body')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const exit = document.querySelector('#exit')
const toggleOff = document.querySelector('#toggle-off')
const toggleOn = document.querySelector('#toogle-on')
const navUl = document.querySelector('nav ul')

const galleryLength = gallery.length

const imgModal = (arquivo) => {

    const ext = arquivo.split('.').pop()
    let cod

    if (ext === 'jpeg') {
        const img = document.createElement('img')
        img.setAttribute('src', arquivo)
        cod = img
    }
    if (ext === 'mp4') {
        const video = document.createElement("video")
        video.setAttribute('src', arquivo)
        video.setAttribute('type', type = `video/${ext}`)
        video.setAttribute('controls', true)
        cod = video
    }
    background.classList.remove('none')
    modal.classList.remove('none')
    body.classList.add('over-hidden')
    modalSrc.appendChild(cod)
}

let ind
gallery.forEach((el, i) => el.addEventListener('click', () => {
    const arquivo = el.getAttribute('src')
    console.log(i === galleryLength - 1)
    if (i === 0) {
        left.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    } else if (i === galleryLength - 1) {
        right.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    }
    ind = i
    imgModal(arquivo)
}))

left.addEventListener('click', () => {
    if (ind === 0) {
        return
    } else if (ind === 1) {
        left.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    } else if (ind === galleryLength - 1) {
        right.setAttribute('style', '')
    }

    const arquivo = gallery[ind - 1].getAttribute('src')
    modalSrc.innerHTML = ''
    imgModal(arquivo)
    ind--
})

right.addEventListener('click', () => {
    if (ind === galleryLength - 1) {
        return
    } else if (ind === galleryLength - 2) {
        right.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    } else {
        left.setAttribute('style', '')
    }
    const arquivo = gallery[ind + 1].getAttribute('src')
    modalSrc.innerHTML = ''
    imgModal(arquivo)
    ind++
})

exit.addEventListener('click', () => {
    modal.classList.add('none')
    background.classList.add('none')
    body.classList.remove('over-hidden')
    left.setAttribute('style', '')
    right.setAttribute('style', '')
})

background.addEventListener('click', () => exit.click())


toggleOff.addEventListener('click', () => {
    toggleOff.classList.add('none')
    toggleOn.classList.remove('none')
    background.classList.remove('none')
    body.classList.add('over-hidden')
    navUl.setAttribute('style', 'display: block')
    background.setAttribute('style', 'pointer-events: none')
})

toggleOn.addEventListener('click', () => {
    toggleOff.classList.remove('none')
    toggleOn.classList.add('none')
    background.classList.add('none')
    body.classList.remove('over-hidden')
    navUl.setAttribute('style', 'display: none')
    background.setAttribute('style', '')
})

function a() {
    const li = document.querySelectorAll('nav ul li')
    let largura = window.screen.width;
    if (largura < 666) {
        li.forEach(el => el.addEventListener('click', () => toggleOn.click()))
        console.log(1)
    }
}
a()


