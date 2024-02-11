// mnav mobile view

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close__btn');
const closeBtnIcon = document.querySelector('.mnav__close__btn_icon');


const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    console.log("button clicked")
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);
        // mobileNav.classList.add(navOpenedClass)
        mobileNav.classList.remove(navClosedClass)
        closeBtnIcon.classList.remove(arrowRightClass);
        closeBtnIcon.classList.add(arrowLeftClass);
    } else {
        mobileNav.classList.add(navClosedClass)
        closeBtnIcon.classList.remove(arrowRightClass);
        closeBtnIcon.classList.add(arrowLeftClass);
    }
});



// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

//   faq

const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn')
    item.addEventListener('click', () => {
        console.log("button clicked")
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconELement = faqBtn.querySelector('i');
        iconELement.classList = `${iconClass} text-2xl`
    })
})

const sr = ScrollReveal({
    origin : 'bottom',
    distance: '60px',
    duration: 2000,
    delay:500,
    reset:true, //resets aniamtion
})
//hero
sr.reveal('.hero__text', {origin:'top'})
sr.reveal('.hero__img')

//stats
sr.reveal('.stats__item',{
    delay:500,
    distance:'100px',
    interval:50,
    origin:'top'
})

//services
sr.reveal('.services')
sr.reveal('services__top')
sr.reveal('.services__item',{
    delay:500,
    distance:'100px',
    interval:50,
    origin:'bottom'
})

// appointment
    sr.reveal('.appointment__title')
    sr.reveal('.appointment__form')
    //testimonials
    
    sr.reveal('.testimonials__container')
    
    //team
    sr.reveal('.team__title')
    sr.reveal('.team__slider')
    
    
    //faq
    
    sr.reveal('.faq__title')
    sr.reveal('.faq__item',{
        delay:500,
        distance:'100px',
        interval:50,
        origin:'bottom'
    })
//departments

sr.reveal('.departments__bg')
sr.reveal('.departments__Container')


//blog

sr.reveal('.blog__title')
sr.reveal('.blog__post')


//brands

sr.reveal('.brands__img',{
    delay:500,
    distance:'100px',
    interval:50,
    origin:'top'
})


//footer

sr.reveal('.footer')
sr.reveal('.footer__item',{
    delay:500,
    distance:'100px',
    interval:50,
    origin:'top'
})