document.getElementById('search-button').addEventListener('click', () => {
    
    document.getElementById('logo').classList.add('is-hidden');
    document.getElementById('icons').classList.add('is-hidden');
    document.getElementById('search-button').classList.add('is-hidden');
    document.getElementById('search-section').classList.add('search-custom');
    document.getElementById('search-container').classList.remove('is-hidden');
});

document.getElementById('exit-search').addEventListener('click', () => {
    
    document.getElementById('logo').classList.remove('is-hidden');
    document.getElementById('icons').classList.remove('is-hidden');
    document.getElementById('search-button').classList.remove('is-hidden');
    document.getElementById('search-section').classList.remove('search-custom');
    document.getElementById('search-container').classList.add('is-hidden');
});

function addedToCart(){
    window.alert("Successfully added to cart!");
}

function addToWishlist(){
    window.alert("Successfully added to wishlist!");
}


