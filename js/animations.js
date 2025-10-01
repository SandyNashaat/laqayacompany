// كشف العناصر عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial, .feature-item');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        elementObserver.observe(el);
    });
    
    // عدادات الإحصائيات
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statsObserver.observe(statsSection);
    }
    
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const duration = 2000; // مدة العد بالمللي ثانية
            const increment = target / (duration / 16); // زيادة كل إطار
            
            let current = count;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                counter.innerText = Math.floor(current);
            }, 16);
        });
    }
    
    // تأثير الكتابة للنص
    const typedElements = document.querySelectorAll('.typed-text');
    if (typedElements.length > 0) {
        typedElements.forEach(el => {
            const texts = JSON.parse(el.getAttribute('data-typed'));
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingDelay = 100;
            let erasingDelay = 50;
            let newTextDelay = 2000;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    el.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingDelay = erasingDelay;
                } else {
                    el.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingDelay = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingDelay = newTextDelay;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingDelay = 500;
                }
                
                setTimeout(type, typingDelay);
            }
            
            setTimeout(type, newTextDelay);
        });
    }
    
    // تنعيم التمرير للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // شريط التقدم
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    if (progressBars.length > 0) {
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    progressObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
    
    // منزلق الصور
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (totalSlides > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            
            currentSlide = (index + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        }
        
        document.querySelector('.slide-next')?.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        document.querySelector('.slide-prev')?.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        // التمرير التلقائي
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
});