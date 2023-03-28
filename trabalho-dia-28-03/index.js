const senha = document.querySelector('#senha')
const email = document.querySelector('#email')
const nome = document.querySelector('#nome')
const button = document.querySelector('.btn')
const bar = document.querySelector('.bar')
const text = document.querySelector('.text')


button.addEventListener('click', event => {

    if(!email.value || !senha.value || !nome.value) {
        event.preventDefault()
        alert('Todos os dados precisam ser preenchidos')
    }
})
