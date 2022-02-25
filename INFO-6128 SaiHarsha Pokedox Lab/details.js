getData();
function getData() {
    let html = '';
    let url = window.location.href.split('url=').pop();
    let link = url.split('&')[0];
    let idx = url.split('&')[1];

    axios.get(`${url}`)
        .then((response) => {
            showDetails(response.data);
        }, (error) => {
            console.log(error);
        });
}

function showDetails(arr) {
    let url = window.location.href;
    // let idx = url[url.length-2];
    let idx = url.split('/');
    idx = idx[idx.length-2];
    document.getElementById('img').src = arr.sprites.back_default;
    let stats = '';
    arr.stats.forEach(elem => {
        stats += `${elem.base_stat}, `;
    });
    stats = stats.slice(0, stats.length-2);

    let moves = '';
    arr.moves.forEach(elem => {
        let move = capitalizeFirstLetter(elem.move.name);
        moves += `${move}, `;

    });
    moves = moves.slice(0, moves.length-2);

    let name = capitalizeFirstLetter(arr.name);
    let type = capitalizeFirstLetter(arr.types[0].type.name);
    document.getElementById('name').innerHTML = `<b>${name}</b>`;
    document.getElementById('num').innerHTML = `<b>#${idx}</b>`;
    document.getElementById('type').innerHTML = `<b>${type}</b>`;
    document.getElementById('stats').innerHTML = `<b>${stats}</b>`;
    document.getElementById('moves').innerHTML = `${moves} <br/>`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}