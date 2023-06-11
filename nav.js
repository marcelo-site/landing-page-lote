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




