document.querySelector(".timestamp").innerHTML
=(new Date()).toLocaleTimeString();

document.querySelector(".ajax-json")
.addEventListener('click', getClientDataAjax);

function getClientDataAjax() {
    const xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const clientData=JSON.parse(xhr.responseText);
        document.querySelector('.client-name').innerHTML 
        = clientData.name;
        document.querySelector('.account-number').innerHTML 
        = clientData.account;
        document.querySelector('.client-active').innerHTML 
        = clientData.active;
    }
  }
  xhr.open("GET", "client-data.json?r="+Math.random(), true);
  xhr.send();
}