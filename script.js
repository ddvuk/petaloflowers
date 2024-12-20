// Получаем элемент стрелки
const scrollToTopBtn = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Функция для прокрутки к началу страницы
scrollToTopBtn.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker span');
    
    function animateTicker() {
        ticker.style.transform = 'translateX(100%)';
        ticker.style.transition = 'none';
        
        setTimeout(() => {
            ticker.style.transform = 'translateX(-100%)';
            ticker.style.transition = 'transform 12s linear';
        }, 100);
    }

    animateTicker();

    setInterval(animateTicker, 12000);
});

document.querySelectorAll('.flower-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.flower-image').style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.querySelector('.flower-image').style.transform = 'scale(1)';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('calculateButton').addEventListener('click', function() {
    let totalPrice = 0;

    for (let i = 1; i <= 3; i++) {
        const flowerSelect = document.getElementById(`flowerSelect${i}`); // Используем обратные кавычки
        const quantity = document.getElementById(`quantity${i}`).value; // Используем обратные кавычки

        const flowerPrice = parseFloat(flowerSelect.value);
        const quantityValue = parseInt(quantity) || 0; // Преобразуем в число и обрабатываем NaN
        totalPrice += flowerPrice * quantityValue;
    }
    
    document.getElementById('totalPrice').innerText = 'Итоговая цена: ' + totalPrice + ' руб.';
});
