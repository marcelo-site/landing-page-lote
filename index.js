const price = document.querySelectorAll('[data-value]')
const parc = document.querySelectorAll('[data-parc]')
const select = document.querySelector('select')

select.addEventListener('change', () => {
    const periodo = Number(select.value)
    price.forEach((el, i) => {
        const priceDivido = el.innerHTML.replace('R$ ', '')
            .replace('.', '').replace(',00', '')
            / periodo
        let price = priceDivido
            .toString()
            .split('')
        let priceBR = parseFloat(price.join().replace(/\,/g, ''))

        parc[i].innerHTML = `${priceBR.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    })
})
const topo = document.querySelector('#top')
const heigth = window.screen.height

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if ( scroll < heigth - 150) {
        topo.classList.add('none')
    } else {
        topo.classList.remove('none')
    }
})

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