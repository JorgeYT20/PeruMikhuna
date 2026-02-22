document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const cat = btn.dataset.cat;
        document.querySelectorAll('.category-section').forEach(sec => {
            sec.classList.add('hidden');
            if (cat === 'all' || sec.dataset.cat === cat) {
                sec.classList.remove('hidden');
                sec.classList.add('fade-in');
            }
        });
    });
});
