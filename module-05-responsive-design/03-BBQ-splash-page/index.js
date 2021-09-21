const formControl = document.querySelector('.form-control')

formControl.addEventListener('submit', event => {
  // stop the default event behavior
  event.preventDefault()

  // use FormData to get the user's name and email 
  const formData = new FormData(event.target)
  
  const userFirstname = formData.get('fname')
  const userEmail = formData.get('email')
  
  const updatedHtmlContent = `
    <h2>Congratulations, ${userFirstname}</h2>
    <p>You're on your way to becoming a BBQ Master!</p>
    <p><small>You will get weekly BBQ tips sent to: ${userEmail}</small></p>
  `

  const outputHtml = document.querySelector('.content')
  outputHtml.innerHTML =  updatedHtmlContent
})
