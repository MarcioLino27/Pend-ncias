document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ddd'; 
        item.style.fontWeight = 'bold'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = ''; 
        item.style.fontWeight = ''; 
    });
});
