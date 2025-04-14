// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (validateEmail(email)) {
        // In a real app, you would send this to your server
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulate loading articles (in a real app, you'd fetch from an API)
window.addEventListener('DOMContentLoaded', function() {
    // This is where you would fetch real data
    console.log('Page loaded - ready to fetch news articles');
    
    // Example of how you might handle a "Load More" button
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'Load More Articles';
    loadMoreBtn.className = 'load-more';
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.style.margin = '2rem auto';
    loadMoreBtn.style.padding = '1rem 2rem';
    loadMoreBtn.style.backgroundColor = 'var(--primary-color)';
    loadMoreBtn.style.color = 'white';
    loadMoreBtn.style.border = 'none';
    loadMoreBtn.style.borderRadius = '4px';
    loadMoreBtn.style.cursor = 'pointer';
    
    document.querySelector('main').appendChild(loadMoreBtn);
    
    loadMoreBtn.addEventListener('click', function() {
        // Simulate loading more articles
        console.log('Loading more articles...');
        this.textContent = 'Loading...';
        
        setTimeout(() => {
            this.textContent = 'Load More Articles';
            alert('In a real implementation, this would load more articles from your database or API');
        }, 1000);
    });
});

// Responsive adjustments
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 992) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});