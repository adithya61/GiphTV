var url = "http://api.giphy.com/v1/gifs/search?q=funny+cats&api_key=mv1mmeeRDbb70ve5sX4BMD94TOOrhOpa&limit=15";

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function (e) {

    var response = e.target.response;
    pushToDOM(response);

});


function pushToDOM(response) {

    var res = JSON.parse(response);

    var js = document.querySelector('img');


    for (let i = 0; i < res.data.length; ++i) {
        image(i);
    }

    function image(i) {
        setTimeout(function () {
            console.log(i);
            var urls = res.data[i].images.fixed_height.url;
            console.log(urls);
            js.src = urls;
        }, 5000 * i);
    }

}

