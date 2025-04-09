document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '26a16cc9926c4fc8ae2b4f28ca507c90'; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            const newsContainer = document.getElementById('news-container');
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(article => {
                    const card = document.createElement('div');
                    card.className = 'news-card';

                    const image = document.createElement('img');
                    image.src = article.urlToImage || 'https://via.placeholder.com/300x200';
                    image.alt = article.title;

                    const title = document.createElement('h2');
                    title.textContent = article.title;

                    const description = document.createElement('p');
                    description.textContent = article.description || 'No description available.';

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.textContent = 'Read More';
                    link.target = '_blank';

                    card.appendChild(image);
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(link);

                    newsContainer.appendChild(card);
                });
            } else {
                newsContainer.innerHTML = '<p>No news articles found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
        });
});