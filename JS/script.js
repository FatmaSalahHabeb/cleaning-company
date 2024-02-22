
let up = document.querySelector(".up");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 350) {
        if (!up.classList.contains("upEntarance")) {
            up.classList.remove("upExit");
            up.classList.add("upEntarance");
            up.style.display = "flex"
        }

    } else {
        if (up.classList.contains("upEntarance")) {
            up.classList.remove("upEntarance");
            up.classList.add("upExit");
            setTimeout(function() {
                up.style.display = "none";
            }, 250);

        }

    }
}
up.addEventListener("click", bakTotop);

function bakTotop() {
    window.scrollTo(0, 0);
}

// _______________________________________________________________
// _______________________________________________________________
// _______________________________________________________________

function changBg() {
    var navbar = document.getElementById("header")
    var scroleValue = window.scrollY;
    // console.log(scroleValue);
    if (scroleValue < 145) {
        navbar.classList.remove('navBg')
    } else { navbar.classList.add('navBg') }
}
window.addEventListener('scroll', changBg);

// ----------------------------------------------------------
// --------------------------------------------------------------
// -------------------------------------------------------------

const menu = document.querySelector(".menu");
const openbtn = document.querySelector(".open-menu-btn");
const closbtn = document.querySelector(".close-menu-btn");

[openbtn,closbtn].forEach((btn)=>{
    btn.addEventListener("click",()=>{
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    })
});
menu.addEventListener("transitionend" , function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".drop-down .downicon").forEach((arrow) =>{
    arrow.addEventListener("click" , function(){
        this.closest(".drop-down").classList.toggle("active")
    });
});

//   slider section start ********************************************************************************************************
const myslide = document.querySelectorAll('.myslide'),
dot1 = document.querySelectorAll('.dot1');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot1.length;i++) {
		dot1[i].className = dot1[i].className.replace(' activeSlider', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	// dot1[counter - 1].className += " activeSlider";
}
//   slider section end ********************************************************************************************************
//   slider section end ********************************************************************************************************
//   slider section end ********************************************************************************************************

let list = document.querySelectorAll(".project-list");
let itemBox = document.querySelectorAll(".item-box");
for(let i =0 ; i < list.length ; i++){
    list[i].addEventListener("click", function(){
        for(let j = 0 ; j< list.length ; j++){
            list[j].classList.remove('active-list')
        }
        this.classList.add('active-list');

        let dataFilter = this.getAttribute('data-filter')

        for(let k = 0 ; k < itemBox.length; k++){
            itemBox[k].classList.remove('active-list');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter ||
            dataFilter == "all" ){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active-list');
            }
        }
    })
}
// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// --------------------------------------------------------------------------
$(document).ready(function(){
    $('.testimonial-content').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})
// ______________________________________________________________________
// ______________________________________________________________________
// ______________________________________________________________________

var clickLocationbtn = document.getElementById('clickLocationbtn')
function showLocation(){
    clickLocationbtn.style.display="flex";
    document.body.style.overflow = 'hidden';
}
function iframCloseBtn(){
    clickLocationbtn.style.display="none";
    document.body.style.overflow = 'auto';
    
}
// -----------------------------------------------------------------------
// -------------------------------------------------------------------------
// ---------------------------------------------------------------------------
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-left: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// -----------------------------------------------------------------------
// -------------------------------------------------------------------------
// ---------------------------------------------------------------------------
AOS.init();