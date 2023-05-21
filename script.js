const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gallery = document.getElementById('gallery');

searchButton.addEventListener('click', searchImages);

function searchImages() {
    const query = searchInput.value;
    const accessKey = 't9Scs1GVfbKYXWjNJFpEieFWGDxxfN852DYyAWU1Gpg'; // Replace with your actual access key
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            gallery.innerHTML = '';

            data.results.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo.urls.small;
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.log(error));
}
