const usernameInput = document.querySelector('.username')
const buttonConfirmedUsername = document.querySelector('.enviar')
const nome = document.querySelector('.nomeh4')
const avatar = document.querySelector('.avatar')
const foto = document.querySelector('.foto')
const comentar = document.querySelector('.comentar')
const comment = document.querySelector('.commentH4')
const commentCamp = document.querySelector('textarea')

buttonConfirmedUsername.addEventListener('click', event => {

  //Faz o a o nome digitado aparecer na tela
  event.preventDefault()
  document.querySelector('.container').style.display = 'inline-block'
  document.querySelector('.container3').style.display = 'none'
  nome.textContent = usernameInput.value

  document.querySelector('.contexto').style.display = 'block'
  document.querySelector('.direitos').style.display = 'none'

  //Fazer com que um comentario novo apareça embaixo do outro
  

})

const avatarChildren = Array.from(avatar.children)

  avatarChildren.forEach(element => {
    element.addEventListener('click', event => {
      const clickedElement = event.target
      if(clickedElement === avatarChildren[0]){
        document.querySelector('.feedback').style.display = 'block'

        setTimeout(() => {
          document.querySelector('.feedback').style.display = 'none'
        }, 1000)
        
        document.querySelector('.fotoImg').src = 'Avatar1.png'
      }else if(clickedElement === avatarChildren[1]){
        document.querySelector('.feedback').style.display = 'block'

        setTimeout(() => {
          document.querySelector('.feedback').style.display = 'none'
        }, 1000)

        document.querySelector('.fotoImg').src = 'Avatar2.png'
      }
    })
  })

comentar.addEventListener('click', event => {
  event.preventDefault()
  
  comment.textContent = commentCamp.value
  foto.style.display  = 'block'
  commentCamp.value = ''

  document.querySelector('.QtdCaracteres').textContent = `${comment.textContent.length} caracteres`
})

setTimeout(() => {
  alert('Na próxima página, clique no botão azul à esquerda, professor')
}, 1000)

document.querySelector('.contexto').addEventListener('click', () => {
  document.querySelector('.contextoLink').href = 'contexto.html'
})