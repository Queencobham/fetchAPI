const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve);

function retrieve(e){

  newsList.innerHTML = ''

  e.preventDefault()

  
  let topic = input.value;

  
  fetch(`https://gnews.io/api/v3/search?q=${topic}&token=d5640825b9574f46716962e062c5e996`).then((res) =>{
    return res.json()
  }).then((data) =>{
    console.log(data)
    data.articles.forEach(article =>{
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', article.url);
      a.setAttribute('target', '_blank');
      a.textContent = article.title;
      li.appendChild(a);
      newsList.appendChild(li);
    })
  }) 
}