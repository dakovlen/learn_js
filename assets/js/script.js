var article = [
    {
        img: 'assets/img/test.webp',
        name: 'Article Name1',
        readAll: 'some-link.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Nam2',
        readAll: 'some-link.html',
    },

    {
        img: 'assets/img/test.webp',
        name: 'Article Name3',
        readAll: 'some-link.html',
    },
];

let card = document.getElementById('card');

let countArticle = article.length;

for (let i = 0; i < countArticle; i++) {
  let img = article[i].img;
  let name = article[i].name;
  let readAll = article[i].readAll;

  card.innerHTML = (`<div class="article-content"><img src="${img}"/>` + '<h4>' + name + '</h4>' + `<a href="${readAll}" class="link">Читать</a>`+ '</div>');
}

