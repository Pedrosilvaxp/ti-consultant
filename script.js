const header = document.querySelector('header');
const navDesktop = document.querySelector('.navDesktop');
const logo = document.querySelector('.logo');
const backButton = document.querySelector('#back-button');

let detect = 0;

window.onscroll = function () {
    let userScroll = document.documentElement.scrollTop;

    if (userScroll > detect) {
        header.style.top = '-200px';
    } else {
        header.style.top = '0';
    }

    if (userScroll > 100) {
        navDesktop.classList.add('active');
    } else {
        navDesktop.classList.remove('active');
    }

    if (userScroll > 400) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }

    detect = userScroll <= 0 ? 0 : userScroll;
}

// Voltar 
function voltar() {
    event.preventDefault();
    scrollTo({ top: 0, behavior:'smooth' });
}

// Scroll automático
const servicoArea = document.querySelector('.servicos');
const diferenArea = document.querySelector('.diferenciais');
const sobreArea = document.querySelector('.sobre');
function scroll(call) {
    event.preventDefault();
    call.scrollIntoView({ behavior:'smooth' });
}
function scrollServico() {
    scroll(servicoArea);
}
function scrollDiferen() {
    scroll(diferenArea);
}
function scrollSobre() {
    scroll(sobreArea);
}

// Dando efeito na imagem
let consultant = document.querySelector('.consultant');
consultant.classList.add('con-active');

// Menu mobile
const navMobile = document.querySelector('.navMobile');
const menuButton = document.querySelector('.mobile-btn');
const linkMobile = document.querySelectorAll('.navMobile a');
linkMobile.forEach(ele => {
    ele.addEventListener('click', function() {
        navMobile.classList.remove('active');
    })
});
menuButton.addEventListener('click', function() {
    if (navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
    } else {
        navMobile.classList.add('active');
    }
});