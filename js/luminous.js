const externalLinks = document.querySelectorAll('.external-link');

externalLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert("This link connects with one of the client's external services - Not available in this demo version of the site.")
    })
})