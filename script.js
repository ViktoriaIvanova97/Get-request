fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(function(response){return response.json()})
    .then(function(data) {
        console.log(data);
        document.querySelector('.info'). textContent = data.results[1].status;
        document.querySelector('.info2'). textContent = data.results[4].episode[3];
        })

    .catch(function() {

    });




