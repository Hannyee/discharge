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