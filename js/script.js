const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        const navLink = document.querySelectorAll('.navbar a');

        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-menu');
            menuIcon.classList.toggle('bx-x');
        });

        navLink.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
            });
        });



window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
};

const titles = ["Front-end Developer", "UI/UX Designer", "Specialist in React"];
let currentTitleIndex = 0;
let isDeleting = false;
let text = '';
const typingSpeed = 70;
const deletingSpeed = 60;
const pauseTime = 1500;

function type() {
    const typingElement = document.querySelector('.typing-animation');
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting) {
        text = currentTitle.substring(0, text.length + 1);
        typingElement.textContent = text;

        if (text === currentTitle) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, typingSpeed);
        }
    } else {
        text = currentTitle.substring(0, text.length - 1);
        typingElement.textContent = text;

        if (text === '') {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, deletingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, typingSpeed);
});


//////////////////////////////////////
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top <offset + height){
            navLinks
        navLinks.forEach(links =>{

            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
});
}


var swiper=new Swiper(".mySwiper",{
    slidesPerView:1,
    spaceBetween:50,
    loop:true,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,

    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",

    },

});




const sr = ScrollReveal ({
    distance : '45px',
    duration : 3000,
    reset : true,
  })

  sr.reveal('.header',{ delay:350, origin:'top' })
  sr.reveal('.home-content',{ delay:350, origin:'left' })
  sr.reveal('.box',{ delay:350, origin:'right' })
  sr.reveal('.social-media',{ delay:330, origin:'bottom' })
  sr.reveal('.btn',{ delay:320, origin:'left' })

  sr.reveal('.about-img',{ delay:350, origin:'left' })
  sr.reveal('.about-content',{ delay:350, origin:'right' })

  sr.reveal('.heading',{ delay:350, origin:'top' })
  sr.reveal('.services-box',{ delay:350, origin:'right' })
  sr.reveal('.skill-card',{ delay:320, origin:'left' })

  sr.reveal('.portfolio-box',{ delay:350, origin:'right' })
  sr.reveal('.testimonial-container',{ delay:350, origin:'bottom' })
  sr.reveal('.contact',{ delay:350, origin:'top' })
  sr.reveal('.footer-text',{ delay:330, origin:'top' })


  















