
var input = document.getElementById('myInput');

// Source code
// https://www.sitepoint.com/load-flickr-photos-using-jsonapi/

function jsonFlickrFeed(json) {
    $.each(json.items, function (i, item) {

        var newLi = document.createElement('li');

        var img = document.createElement('img');
        img.src = item.media.m;

        newLi.appendChild(img);

        list.appendChild(newLi, list.firstChild);

    });
};

function getPictures() {
    console.log('get pictures');

    var tag = input.value
    if (tag) {
        console.log(tag);

        $.ajax({
            url: 'https://api.flickr.com/services/feeds/photos_public.gne',
            dataType: 'jsonp',
            data: { "tags": tag, "format": "json" }
        });

    }

}
