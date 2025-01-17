const article = document.querySelector('body');

// Font size controls
document.getElementById('increase-font').addEventListener('click', () => {
    const currentSize = parseFloat(window.getComputedStyle(article).fontSize);
    article.style.fontSize = `${currentSize + 2}px`;
});

document.getElementById('decrease-font').addEventListener('click', () => {
    const currentSize = parseFloat(window.getComputedStyle(article).fontSize);
    article.style.fontSize = `${currentSize - 2}px`;
});

// Font menu
document.getElementById('font-menu').addEventListener('change', (e) => {
    article.style.fontFamily = e.target.value;
});
