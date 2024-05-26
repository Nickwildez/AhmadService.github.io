document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
    });
    document.body.classList.add('loaded');
})

function tutup() {
    const tutupNav = document.querySelector('.nav-content');
    tutupNav.classList.toggle('closed');

    const buttonNav = document.querySelector('#toggleNav');
    buttonNav.classList.toggle('closed');
}

function openAllContent() {
    const homePembukaan = document.querySelector('.home');
    const aboutContent = document.querySelector('.about');
    const CardInfo = document.querySelector('.card');
    const footerInfo = document.querySelector('footer');
    const OpenHeader = document.querySelector('header');

    homePembukaan.style.display = "none";
    aboutContent.classList.add('openContent');
    CardInfo.classList.add('openContent');
    footerInfo.classList.add('openContent');
    OpenHeader.classList.add('visible');
}

const classSection = document.querySelectorAll('section');
const headerNavA = document.querySelectorAll('header nav a');
window.onscroll =  () => {
    classSection.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top > offset && top < offset + height) {
            headerNavA.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}

function OpenCallDEV() {
    const secCallDEV = document.querySelector('.sec-callDev');
    secCallDEV.classList.add('opencallDEV');
}

function removeCallDev() {
    const secCallDEV = document.querySelector('.sec-callDev');
    secCallDEV.classList.remove('opencallDEV');
}

document.getElementById("whatsapp").addEventListener('click', function (event) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        window.location.href = 'https://wa.me/6285774546860?text=Halo,%20saya%20menghubungi%20Anda%20dari%20situs%20web%20anda';
        event.preventDefault();
    }
});
