const request = new XMLHttpRequest();
request.open('GET', 'hh.json');
request.responseType = 'json';
request.send();

request.onload = function() {
    const cardsContainer = document.getElementById('cards');
    const data = request.response;
    data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.img;
        card.appendChild(img);

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = `$${product.price}`;
        card.appendChild(price);

        const title = document.createElement('h2');
        title.textContent = product.title;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = product.description;
        card.appendChild(description);

        cardsContainer.appendChild(card);
    });
};