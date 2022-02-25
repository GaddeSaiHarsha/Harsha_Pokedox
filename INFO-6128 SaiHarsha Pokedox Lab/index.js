axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((response) => {
        show(response.data.results);
    }, (error) => {
        console.log(error);
    });

function show(arr) {
    arr.forEach(elem => {
        let idx = elem.url.split('/'); 
        idx = idx[idx.length-2];
        let name = capitalizeFirstLetter(elem.name);
        var ul = document.getElementById("lis");
        var li = document.createElement("li");
        li.insertAdjacentHTML('beforeend', `<span style="float:left">${idx}</span>`);
        li.insertAdjacentHTML('beforeend', `<span onclick="detail('${elem.url}')" style='cursor: pointer'>${name}</span>`);
        li.insertAdjacentHTML('beforeend', `<span style="float:right"><i class="bi bi-chevron-compact-right"></i></span>`);
        ul.appendChild(li);
    });
}

function detail(url) {
    window.location.href = `details.html?url=${url}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
