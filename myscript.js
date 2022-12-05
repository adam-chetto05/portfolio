
// check if there's local storage color 
let mainColors = localStorage.getItem('colors-list');
console.log(mainColors)
if (mainColors !==null){
    document.documentElement.style.setProperty("--main--color", localStorage.getItem('colors-list'));
    
    // check for active class
    // remove class list for all element if local storage have already color stored
    document.querySelectorAll('.colors-list li').forEach(element => {
    element.classList.remove("active")

    if (element.dataset.color === mainColors){
        element.classList.add("active")
    }
    
}) 
};

// add an remove active class from ul and add class list to trrget link 
const  links = document.querySelectorAll('.links li a')
links.forEach(lin =>{
    lin.addEventListener("click", (e) => {
        links.forEach(element => {
        element.classList.remove('active');
        e.target.classList.add('active');
    }) 
})
 })
const  setlis = document.querySelectorAll('.setting-nav li')



setlis.forEach(setli =>{
    setli.addEventListener("click", (e) => {
        setlis.forEach(element => {
        element.classList.remove('active');
        e.target.classList.add('active');
    }) 
 })
})



// heres fuunction for automatisme d scrool To for navigation in settings 
const  setnav = document.querySelectorAll('.setting-nav li a')
scrollto(setnav)

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings").onclick = function () {
    // Toggle Class Fa-spin For Rotation On Self
    document.querySelector(".fa-gear").classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};
// ###### other methode for toggle rotation and class open on main setting #####
// let icon = document.querySelector('.fa-gear');
// let toggle = document.querySelector('.toggle-settings');
// let box = document.querySelector('.settings-box');
// toggle.onclick = function() {
//     if(box.classList == 'settings-box')
//     { icon.classList.add('fa-spin');
//     box.classList.add('open');}
//     else{
//         icon.classList.remove('fa-spin');
//           box.classList.remove('open');
//     }
//  }

// function toggle for active class






// switch color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li =>{
   li.addEventListener("click", (e) => {
    //console.log(e.target.dataset.color);
    //set color on root 
    document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
    localStorage.setItem('colors-list',e.target.dataset.color );

e.target.parentElement.querySelectorAll('.active').forEach(element => {
    element.classList.remove("active")
})
e.target.classList.add('active')
    
   });
});



// select landing page 
//let landingPage = document.querySelector('.landing-page');
// get array from imgs 
//let imgsArray = ["01.jpeg, 02.jpeg, 03.jpeg, 04.jpeg, 05.jpeg"]
// setInterval(() => {
//     // get random img
//     let randomNumber = Math.floor(Math.random() * 5);
//     // console.log(randomNumber)
    
//     //change background image
//     //landingPage.style.backgroundImage = 'url("../images/'+ imgsArray[randomNumber]+ '")';
    
// }, 10000);





// select skills
let ourSkills= document.querySelector('.skills');

window.onscroll = function () {




    // get ofsset top 
let skillsOffsetTop = ourSkills.offsetTop;

    // get skills outerheight = height section skills
let skillsOuterHeight = ourSkills.offsetHeight


    // window scroll top 
let windowScrollTop = this.pageYOffset

    // get window height 
let windowHeight = this.innerHeight

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    
let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

allSkills.forEach (skill => {
    skill.style.width = skill.dataset.progress;
})
}
};

let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {
    img.addEventListener('click', (e)=>{
// creat overlay element
let overLay = document.createElement("div");

// add class to overlay
overLay.className = "popup-overlay";
// append overlay to body 
document.body.appendChild(overLay);
// create popup 
let popupBox = document.createElement('div');
// add class name to popup
popupBox.className= "popup-box";

if (img.alt !== null){
// creat headin
var imgheading = document.createElement('h3')
// creat text for headin
let imgtext= document.createTextNode(img.alt)
// append text to the headin
imgheading.appendChild(imgtext)
// append the headin to the popup box 
popupBox.appendChild(imgheading)
}

// creat the image
let popupImage = document.createElement('img');
// Set image src 
popupImage.src = img.src ;


// ADD popup img to popup box 
popupBox.appendChild(popupImage);
// append popup box to body
document.body.appendChild(popupBox);

// create close span
let closeButton = document.createElement('span')
// create the close button text
let closeButtonText = document.createTextNode('X')
// append text to close button
closeButton.appendChild(closeButtonText)
// add class to close button
closeButton.className="close-button"
// add close button to popup box
popupBox.appendChild(closeButton)
    });
});

document.addEventListener('click', function (e){
    if (e.target.className === "close-button" ){
        e.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove()
    }
})

let a = document.querySelector(".timeline")
window.addEventListener('scroll', () => {

   

    if (window.scrollY > 1638) {
    
   a.classList.add('r-anim')
    }
})


let b = document.querySelector(".container-timeline1")
window.addEventListener('scroll', () => {


    if (window.scrollY > 1584) {
    
   b.classList.add('run')
    }
})
let C = document.querySelector(".container-timeline2")
window.addEventListener('scroll', () => {


    if (window.scrollY > 1584) {
    
   C.classList.add('run')
    }
})

let D = document.querySelector(".container-timeline3")
window.addEventListener('scroll', () => {


    if (window.scrollY > 1584) {
    
   D.classList.add('run')
    }
})

let E = document.querySelector(".container-timeline4")
window.addEventListener('scroll', () => {


    if (window.scrollY > 1584) {
    
   E.classList.add('run')
    }
})
let f = document.querySelector(".container-timeline5")
window.addEventListener('scroll', () => {


    if (window.scrollY > 1584) {
    
   f.classList.add('run')
    }
})
// make function for links for best practice  
 const Alllinks = document.querySelectorAll('.links  a')

// Alllinks.forEach(link =>{

//     link.addEventListener("click", (e)=>{
//         e.preventDefault()
//         // document.querySelector(e.target.dataset.section).scrollIntoView({
//              document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth"
//         })
//     })
// })

function scrollto (elements){
    elements.forEach(element =>{
    element.addEventListener('click', (e) =>{
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
})
}

scrollto(Alllinks)
// bullets section 

const Allbullets = document.querySelectorAll('.nav-bullets .bullet')

// Allbullets.forEach(bullet =>{

//     bullet.addEventListener("click", (e)=>{

//         // document.querySelector(e.target.dataset.section).scrollIntoView({
//              document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth"
//         })
//     })
// })
scrollto(Allbullets)
const settingNav = document.querySelectorAll('.settings-nav ul li')
console.log(settingNav)

settingNav.forEach(setNav =>{

    setNav.addEventListener("click", (e)=>{

        // document.querySelector(e.target.dataset.section).scrollIntoView({
             document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})



document.querySelector('.reset-option').onclick = function (){
    localStorage.removeItem("colors-list")
    window.location.reload()
}



// toggle menu for small device
let toggleBtn = document.querySelector('.toggle-menu')
let tlinks = document.querySelector(".links")

toggleBtn.onclick = function(e){

    e.stopPropagation()

    this.classList.toggle("menu-active")

    tlinks.classList.toggle("open")


}


document.addEventListener('click', (e) =>{
    if(e.target !== toggleBtn && e.target !== tlinks){

            if(tlinks.classList.contains('open')){
                tlinks.classList.remove('open')
            }     
            if(toggleBtn.classList.contains('menu-active')){
                toggleBtn.classList.remove('menu-active')
            }
    }
})

tlinks.onclick = function(e){
    e.stopPropagation()
}



// const supportactive = document.querySelector('.toggle-chatlive')
// const togglelivechat = document.lastElementChild.querySelector('.hidden-converssation')


// supportactive.addEventListener('click', (e) =>{

//             if(togglelivechat.classList.contains('active')){
//                 togglelivechat.classList.remove('active')
//             } 
//             else{
//                 if(!togglelivechat.classList.contains('active')){
//                     togglelivechat.classList.add('active')
//                 } 
//             }
          
// })

// supportactive.onclick= function(e){
//     e.stopPropagation()
// }



$(document).on("click","#send-it",function(){
    var a=document.getElementById("chat-input");
    if(""!=a.value){
        var b=$("#get-number").text(),
        c=document.getElementById("chat-input").value,
        d="https://web.whatsapp.com/send",
        e=b,
        f="&text="+c;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        var d="whatsapp://send";
        var g=d+"?phone="+e+f;window.open(g, '_blank')
        window.reload
    }
})
,$(document).on("click",".informasi",function(){
    document.getElementById("get-number").innerHTML=$(this).children(".my-number").text(),
    $(".start-chat,.get-new").addClass("show").removeClass("hide")
    $(".home-chat,.head-home").addClass("hide").removeClass("show")
   
    ,document.getElementById("get-nama").innerHTML=$(this).children(".info-chat").children(".chat-nama").text()
    ,document.getElementById("get-label").innerHTML=$(this).children(".info-chat").children(".chat-label").text()
})

// close chat
    $(document).on("click",".close-chat",function(){
        $("#whatsapp-chat").addClass("hide").removeClass("show")
      
    }) 

    
    $(document).on("click",".blantershow-chat",function(){
        $("#whatsapp-chat").addClass("show").removeClass("hide")
        
    });
    const closeChat = document.querySelector('.close-chat')
    closeChat.addEventListener('click', function(){
        window.location.reload()
    })