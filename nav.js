(function () {
    const li = document.querySelectorAll('nav ul li')
    let largura = window.screen.width;
    const toggle = document.querySelector('#toggle')
    if (largura < 666) {
        li.forEach(el => el.addEventListener('click', () =>{
            toggle.click()
        }))
    }
}) ()
const toggle = document.querySelector('#toggle')
const toggleOn = document.querySelector('#toogle-on')
const toggleOff = document.querySelector('#toggle-off')
const navUl = document.querySelector('nav ul')
const background1 = document.querySelector('#background1')

toggle.addEventListener('click', () => {
    toggleOff.classList.toggle('none')
    toggleOn.classList.toggle('none')
    background1.classList.toggle('none')
    body.classList.toggle('over-hidden')
    navUl.classList.toggle('block')
})
background1.addEventListener('click', () => toggle.click())


