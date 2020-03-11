console.log("JS is loaded")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value
    messageOne.textContent = 'Fetching...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
            }
            else {
                messageOne.textContent = data.location + ' ' + data.forecast
            }
        })

    })

})
