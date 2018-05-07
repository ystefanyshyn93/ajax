document.querySelector('.ajax-html').addEventListener('click', getHTML);

function getHTML () {
    const xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector('.html-placeholder')
        .innerHTML = xhr.responseText;
}
}
xhr.open('GET', 'cat.html', true);
xhr.send();
}