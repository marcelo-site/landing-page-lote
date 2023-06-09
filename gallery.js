const gallery = document.querySelectorAll('[data-gallery]')
const modalSrc = document.querySelector('#modal-src div')
const background2 = document.querySelector('#background2')
const modal = document.querySelector('#modal')
const body = document.querySelector('body')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const exit = document.querySelector('#exit')
const galleryLength = gallery.length

const imgModal = (arquivo) => {
    const ext = arquivo.split('.').pop()
    let cod
    if (ext === 'webp') {
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
    background2.classList.remove('none')
    modal.classList.remove('none')
    body.classList.add('over-hidden')
    modalSrc.appendChild(cod)
}
let ind
gallery.forEach((el, i) => el.addEventListener('click', () => {
    modalSrc.innerHTML = ''
    const arquivo = el.getAttribute('src')
    ind = i
    if (i === 0) {
        left.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    } else if (i === galleryLength - 1) {
        right.setAttribute('style', 'cursor: no-drop; background-color: #f3ebebd1')
    }
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
    background2.classList.add('none')
    body.classList.remove('over-hidden')
    left.setAttribute('style', '')
    right.setAttribute('style', '')
})