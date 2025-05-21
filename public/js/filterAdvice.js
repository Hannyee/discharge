// Function to filter and handle advice cards
function filterAdvice(category) {
    const cards = document.querySelectorAll('.card');
    const adviceContainer = document.getElementById('advice-container');

    // Remove any existing enlarged card
    const enlargedCard = document.querySelector('.card.enlarged');
    if (enlargedCard) {
        enlargedCard.classList.remove('enlarged');
    }

    // If 'all' is selected, show all cards
    if (category === 'all') {
        cards.forEach(card => {
            card.style.display = 'block';
            card.classList.remove('enlarged');
        });
        return;
    }

    // Filter and enlarge the selected category
    cards.forEach(card => {
        if (card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('enlarged');
        } else {
            card.style.display = 'none';
        }
    });
}

// Add click event listeners to all category buttons
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
        });
    });
}); 
// Add click event listeners to all category buttons
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const cards = document.querySelectorAll('.card');
    
    // Category button click handlers
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
        });
    });
    
    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // If search is empty, show all cards
        if (!searchTerm) {
            cards.forEach(card => {
                card.style.display = 'block';
                card.classList.remove('enlarged');
            });
            return;
        }

        // Search through cards
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            const listItems = Array.from(card.querySelectorAll('li')).map(li => li.textContent.toLowerCase());
            
            // Check if search term matches title, content, or list items
            const matches = title.includes(searchTerm) || 
                          content.includes(searchTerm) || 
                          listItems.some(item => item.includes(searchTerm));

            if (matches) {
                card.style.display = 'block';
                card.classList.add('enlarged');
                } else {
                card.style.display = 'none';
            }
        });
    }

    // Add event listeners for search
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}); 