
 function showWelcomeMessage() {
    var userName = prompt("Please enter your name:");

    if (userName) {
        alert("Welcome, " + userName + "! Enjoy your visit.");
    } else {

        location.reload();
    }
}

window.onload = showWelcomeMessage;



document.addEventListener('DOMContentLoaded', () => {
    const mouseTrailContainer = document.createElement('div');
    mouseTrailContainer.classList.add('mouse-trail-container');
    document.body.appendChild(mouseTrailContainer);

    const mouseTrail = document.createElement('div');
    mouseTrail.classList.add('mouse-trail');
    mouseTrailContainer.appendChild(mouseTrail);

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        mouseTrail.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        mouseTrail.classList.add('show');

        setTimeout(() => {
            mouseTrail.classList.remove('show');
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [ "Frontend Web Developer.", "Freeluncer."],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
    };

    var typed = new Typed('#typed-output', options);
});


function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    const apiUrl = 'http://example.com/submit';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        
        alert('An error occurred while submitting the form. Please try again.');
    });
}
function submitForm() {
    alert('Form submitted!');
  }

