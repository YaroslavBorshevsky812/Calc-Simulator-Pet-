const modalBtn = document.querySelector('.modal_button')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.add('active')
})