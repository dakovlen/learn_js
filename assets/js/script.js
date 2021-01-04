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


// for (let i = 0; i < article.length; i++) {
//     console.log(article[i]);
// }

article.forEach(function(post){
    let img = post.img;
    let name = post.name;
    let readAll = post.readAll;
    card.innerHTML += `<div class="article-content"><img src="${img}"/>` + '<h4>' + name + '</h4>' + `<a href="${readAll}" class="link">Читать</a>`+ '</div>';
});