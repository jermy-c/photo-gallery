import "modaal";

fetch("https://picsum.photos/v2/list",{
    method: 'GET'
}).then( res => res.json())
.then( result => {
    result.map(addPhoto);
})

function addPhoto(obj) {
    let container = document.body;
    //let container = document.getElementById('photo-container');
    let link = document.createElement('a');
    let span = document.createElement('span');
    let img = document.createElement('img');

    link.href = obj.download_url;
    link.setAttribute('data-group','gallery');
    link.classList.add('gallery');
    span.innerHTML = 'Show';
    span.classList.add('hidden');
    container.append(link);
    link.append(span);

    img.src = obj.download_url;
    img.classList.add('photo');
    link.append(img);

}

setTimeout( () => {
    $('.gallery').modaal({
        type: 'image'
    });
},1000);





