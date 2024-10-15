const modal = document.querySelector('.modal')
//console.log(modal);
let isModalOpen = false;

function toggleModal() {
    if (isModalOpen == true) {
        modal.style.display = 'none';
        isModalOpen = false;
    }
    else {
        modal.style.display = 'flex';
        isModalOpen = true;
    }
}

const form = document.querySelector('.modal__form')

form.addEventListener('submit', (event)=>{ //стрелочная функция
    event.preventDefault()
    const inputValues = Array.from(document.querySelectorAll('.modal__form-input')).map((input)=>{
        return input.value
    })
    console.log(inputValues)
    form.reset()
})