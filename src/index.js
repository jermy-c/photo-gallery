import "modaal";


fetch("https://picsum.photos/v2/list",{
    method: 'GET'
}).then( res => res.json())
.then( result => {
    result.map(addPhoto);
})

function addPhoto(obj) {
    let container = document.getElementById('photo-container');
    let link = document.createElement('a');
    let img = document.createElement('img');

    link.href = obj.download_url;
    link.classList.add('gallery');
    link.setAttribute('data-group','gallery');
    container.append(link);

    img.src = obj.download_url;
    link.append(img);

}

$('.gallery').modaal({
    type: 'image'
});