const form = document.querySelector('.form form');
const input = document.querySelectorAll('.input-col input');

form.addEventListener('submit', function(elem){
    elem.preventDefault();

    input.forEach(input => {
        if(!input.value){
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
        }
    })
})
