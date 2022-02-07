import './less/index.less'

// Your code goes here!

    // Load event type 
  window.onload = function(event) {
    console.log(`event ${event.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'This is event #1'

    // Copy event type 
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
        .then(text =>{
            heading.textContent += text
        })
    })
    //Click event type 
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('turnBlue')
    })
    //Double click event type 
    document.body.addEventListener('dblclick', event => {
        event.target.classList.toggle('turnRed')
    })
    
}

