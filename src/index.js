import './style.scss'

const parentMenu = document.querySelectorAll('.menu li a')

for (let i =0; i <parentMenu.length; i++) {
    const anchor = parentMenu[i].nextElementSibling
    parentMenu[i].addEventListener('click', (e) => {
        e.preventDefault()
        parentMenu[i].classList.toggle('active')
        anchor.classList.toggle('active')
    })
}