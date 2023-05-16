const toggle = document.querySelector('#toggle')
const toggleOn = document.querySelector('#toogle-on')
const toggleOff = document.querySelector('#toggle-off')
const navUl = document.querySelector('nav ul')
function widthLi () {
    const li = document.querySelectorAll('nav ul li')
    let largura = window.screen.width;
    if (largura < 666) {
        li.forEach(el => el.addEventListener('click', () => toggle.click()))
    }
}
widthLi()
toggle.addEventListener('click', () => {
    toggleOff.classList.toggle('none')
    toggleOn.classList.toggle('none')
    background.classList.toggle('none')
    body.classList.toggle('over-hidden')
    navUl.classList.toggle('block')
    background.setAttribute('style', '')
})


