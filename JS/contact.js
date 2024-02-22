function changBg() {
    var navbar = document.getElementById("header")
    var scroleValue = window.scrollY;
    // console.log(scroleValue);
    if (scroleValue < 145) {
        navbar.classList.remove('navBg')
    } else { navbar.classList.add('navBg') }
}
window.addEventListener('scroll', changBg);





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

// -----------------------------------------------------------------------
// -------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
    
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function sendEmail(){
    Email.send({
        SecureToken : "e0012a58-63d6-48f4-8e6d-958d17980141",
        To : 'albustan.cleaningcompany@gmail.com',
        From : "albustan.cleaningcompany@gmail.com",
        Subject : "test Email",
        Body : "Name: "+ document.getElementById("name").value
                +"<br> Phone: "+ document.getElementById("email").value
                +"<br> Phone: "+ document.getElementById("phone").value
                +"<br> Message: "+ document.getElementById("messege").value
                +"<br> Name: "+ document.getElementById("name").value
    }).then(
      message => alert("message send succefully")
    );
    }; 

    
    function emptInput(){
      inputs.value = '';
    }
    