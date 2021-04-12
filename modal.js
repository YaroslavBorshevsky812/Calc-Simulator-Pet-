const modalMainBtn = document.querySelector('.modal_button')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelectorAll('[data-button]')
const modalDelBtn = document.querySelector('[data-del]')


modalMainBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
})

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(aswr.value === '.' && aswr.value.includes('.')) return
        if((aswr.value.length + 1) > 3) {
            aswr.value = aswr.value.toString()
        } else {
            aswr.value = aswr.value.toString() + btn.innerText.toString()
        }
    })
})

modalDelBtn.addEventListener('click', () => {
    aswr.value = aswr.value.toString().slice(0, -1)
})

