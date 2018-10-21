const endpoint = 'https://api.punkapi.com/v2/beers/random';

function test() {
    fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        results = data.results[0];
        console.log(results);
    });
}

test();