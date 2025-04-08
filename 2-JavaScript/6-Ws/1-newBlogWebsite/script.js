document.addEventListener('DOMContentLoaded', function() {
    // API key from NewsAPI.org (replace with your own key)
    const API_KEY = 'API_KEY'; // Get from https://newsapi.org/
    
    // DOM elements
    const fetchNewsBtn = document.getElementById('fetchNews');
    const newsContainer = document.getElementById('newsContainer');
    const categorySelect = document.getElementById('category');
    const countrySelect = document.getElementById('country');
    
    // Fetch news function
    async function fetchNews() {
        const category = categorySelect.value;
        const country = countrySelect.value;
        
        try {
            // Show loading state
            newsContainer.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>';
            
            // Fetch news from API
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Clear container
            newsContainer.innerHTML = '';
            
            // Check if articles exist
            if (data.articles && data.articles.length > 0) {
                // Create news cards
                data.articles.forEach(article => {
                    if (article.title && article.title !== '[Removed]') {
                        createNewsCard(article);
                    }
                });
            } else {
                newsContainer.innerHTML = '<div class="col-12"><div class="alert alert-warning">No news articles found. Try a different category or country.</div></div>';
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = `<div class="col-12"><div class="alert alert-danger">Failed to fetch news. ${error.message}</div></div>`;
        }
    }
    
    // Create news card function
    function createNewsCard(article) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        const card = document.createElement('div');
        card.className = 'card news-card h-100';
        
        // Image
        let imgSrc = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = imgSrc;
        img.alt = article.title;
        
        // Source badge
        const sourceBadge = document.createElement('div');
        sourceBadge.className = 'source-badge';
        sourceBadge.textContent = article.source.name;
        
        // Card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = article.title;
        
        const content = document.createElement('p');
        content.className = 'card-text';
        content.textContent = article.description || 'No description available.';
        
        const date = document.createElement('small');
        date.className = 'text-muted';
        const publishedDate = new Date(article.publishedAt);
        date.textContent = publishedDate.toLocaleDateString() + ' ' + publishedDate.toLocaleTimeString();
        
        // Read more button
        const readMore = document.createElement('a');
        readMore.className = 'btn btn-outline-primary mt-auto align-self-start';
        readMore.href = article.url;
        readMore.target = '_blank';
        readMore.textContent = 'Read More';
        
        // Append elements
        cardBody.appendChild(title);
        cardBody.appendChild(content);
        cardBody.appendChild(date);
        cardBody.appendChild(readMore);
        
        card.appendChild(img);
        card.appendChild(sourceBadge);
        card.appendChild(cardBody);
        
        col.appendChild(card);
        newsContainer.appendChild(col);
    }
    
    // Event listener for fetch news button
    fetchNewsBtn.addEventListener('click', fetchNews);
    
    // Fetch news on page load
    fetchNews();
});