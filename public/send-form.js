document.querySelector('.sample-form input[type=submit]')
    .addEventListener('click', sendForm);

function sendForm(e) {
    const form = document.querySelector('.sample-form');
    if (form.checkValidity()) {
    e.preventDefault();
    fetch('form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: document.querySelector('.sample-form input[name=name]').value,
            email: document.querySelector('.sample-form input[name=email]').value
        })
    });
    }
    
}