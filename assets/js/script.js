var article = [
    {
        img: 'assets/img/test.webp',
        name: 'Article Name1',
        readAll: 'some-link.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Nam2',
        readAll: 'some-link2.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Name3',
        readAll: 'some-link3.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Name4',
        readAll: 'some-link.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Nam5',
        readAll: 'some-link2.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Name6',
        readAll: 'some-link3.html',
    },
];


let card = document.getElementById('card');

let page = 1,
    step = 3;

let renderCard = function() {
    for (let i = page * step - step; i < page * step && i < article.length; i++) {
        let img = article[i].img;
        let name = article[i].name;
        let readAll = article[i].readAll;
        card.innerHTML += `<div class="article-content"><img src="${img}"/>` + '<h4>' + name + '</h4>' + `<a href="${readAll}" class="link">Читать</a>`+ '</div>'; 
    }
}



document.querySelector('#more').addEventListener('click', function(e){
    renderCard();
    page += 1;
    
    if(article.length < page * step) {
        this.remove();
    }
});