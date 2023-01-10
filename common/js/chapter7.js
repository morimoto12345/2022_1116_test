var img;
var caption;
var div;

for (var i = 0; i < images.length; i++) {
    img = document.createElement('img');
    img.setAttribute('src', images[i].path);

    caption = document.createElement('div');
    caption.className = 'inner';
    caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';

    div = document.createElement = ('div');
    div.className = 'photo';
    div.appendChild(img);
    div.appendChild(caption);

    document.getElementById('img_unit').appendChild(div);

}

// alert(images[0].caption)
