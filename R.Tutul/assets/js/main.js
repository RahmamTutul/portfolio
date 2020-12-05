const showMenu = (toggleId, navId) =>{
    const toggle =document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// active and remove menu 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove Menu list

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


// social animation

const sr =ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset:true,
})


// Social Home==

// Modal for skills



sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social__icon',{interval:200})

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})

sr.reveal('.work__img',{interval:200})


sr.reveal('.contact__input',{interval:200})
