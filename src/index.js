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
            if (text === 'the') {
                event.preventDefault()
            heading.textContent += text
            }
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
    //Keydown event type 
    window.addEventListener('keydown', event => {
        if (event.key === 'o') {
            document.body.innerHTML = 'Do not press o!'
        }
    })
    //Mouse move event type
    document.body.addEventListener('mousemove', event =>{
        const {clientX, clientY} = event
        console.log(`Mouse is at ${clientX}, ${clientY}`)
    })
    //Scroll event type
    window.addEventListener('scroll', () =>{
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (Math.ceil(scrolled) === scrollable) {
            alert('You have reached the bottom')
        }
    });
    //MouseOver event type
    const image = document.querySelector('h2');
    image.addEventListener('mouseenter', function(event){
        event.target.style.color = "purple";
    })
   
    //Keydown event type 
    window.addEventListener('keydown', (event) => {
        if (event.key === 'h') {
        alert('Hello!')
        }
    })
    //blur and focus event types 
    function pause(){
        document.body.classList.add('paused')
        header4.textContent = 'You lost Focus'
    }

    function play() {
        document.body.classList.remove('paused')
        header4.textContent = 'This has focus'
    }

    const header4 = document.querySelector('h4');
    window.addEventListener('blur', pause)
    window.addEventListener('focus', play);
}

