document.querySelector('.fetch-json').addEventListener('click', fetchClientData);

function fetchClientData () {
    fetch('client-data.json')
    .then( response => response.json() )
    .then( clientData => {
         document.querySelector('.client-name').innerHTML = clientData.name;
        document.querySelector('.account-number').innerHTML = clientData.account;
        document.querySelector('.client-active').innerHTML = clientData.active;
    })
    
    
}