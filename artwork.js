const bodyEl = document.querySelector('body')
const headerEl = document.querySelector('header')
const mainEl = document.querySelector('main')
const footerEl = document.querySelector('footer')
const loadigScreen = document.querySelector('div.loading-screen')

function loading() {
  setTimeout(() => {
      // loadigScreenLogo.style.opacity = 0;
      
      setTimeout(() => {

          loadigScreen.style.opacity = 0;
          // bodyEl.style.overflowY = "scroll"
          headerEl.style.display = 'flex';
          mainEl.style.display = 'flex';
          footerEl.style.display = 'flex';
          
          setTimeout(() => {
              loadigScreen.style.display = 'none';
          }, 450);
      }, 250);
      
  }, 10);
}

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("load", function() {
    setTimeout(() => {
      loading()
    }, 810);
  }, false);
})


// NAVIGATION
// Toggle menu
const hamburgerMenuButton = document.querySelector('header.big-screen .menu-btn');
const menuContainer = document.querySelector('header.big-screen nav.menu-nav');
// const menuList = document.querySelector('header.big-screen nav.menu-nav ul.menu-items');
const menuItemLink1 = document.querySelector('header.big-screen nav.menu-nav ul.menu-items li:nth-child(1) a');
const menuItemLink2 = document.querySelector('header.big-screen nav.menu-nav ul.menu-items li:nth-child(2) a');
const menuItemLink3 = document.querySelector('header.big-screen nav.menu-nav ul.menu-items li:nth-child(3) a');
const menuItemLink4 = document.querySelector('header.big-screen nav.menu-nav ul.menu-items li:nth-child(4) a');
const menuItemLinks = document.querySelectorAll('header.big-screen nav.menu-nav ul.menu-items li a');

const menuContactList = document.querySelector('header.big-screen nav ul.contact li');
// const menuContactLink = document.querySelector('header.big-screen nav.menu-nav ul.contact li a');

const menuIcon = document.querySelector('header.big-screen .menu-btn .menu-icon');


let isMenuOpened = false;

hamburgerMenuButton.addEventListener("click", checkMenuIsOpened);
function checkMenuIsOpened(){
    if(isMenuOpened === false){
        openMenu()
    } else if(isMenuOpened === true){
        closeMenu()
        // console.log("clicked")
    }
}
function openMenu(){
    isMenuOpened = true;
    // console.log("openMenu()", isMenuOpened)

    // menuContainer.style.display = "flex"
    // menuContainer.style.transform = "translate(-50%, 0px)"
    setTimeout(() => {
      // menuContainer.style.clipPath = "circle(200% at 50% 0)"
      menuContainer.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"

            setTimeout(() => {

              // console.log(menuItemLink1.parentNode)
              menuItemLink1.parentNode.classList.toggle('opened')
              menuItemLink2.parentNode.classList.toggle('opened')
              menuItemLink3.parentNode.classList.toggle('opened')
              menuItemLink4.parentNode.classList.toggle('opened')

              menuIcon.classList.add('opened')
              setTimeout(() => {
                menuItemLink1.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                menuItemLink1.style.transform = "translateX(0px)"
          
                  setTimeout(() => {
                   
                    menuItemLink2.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    menuItemLink2.style.transform = "translateX(0px)"
                    setTimeout(() => {
                      menuIcon.classList.toggle('clicked')
                   
                      setTimeout(() => {
                        menuItemLink3.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                        menuItemLink3.style.transform = "translateX(0px)"

                        setTimeout(() => {
                          menuItemLink4.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                          menuItemLink4.style.transform = "translateX(0px)"

                          setTimeout(() => {
                            menuContactList.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                            menuContactList.style.transform = "translateX(0px)"
                            // setTimeout(() => {
                            //   menuContactLink.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                            //   menuContactLink.style.transform = "translateY(0px)"
                            // }, 40)
                          }, 40)
                        }, 40)
                      }, 20)
                    }, 20)

                  }, 20)
              }, 20)
            }, 400)

    }, 20)



   
}
function closeMenu(){
    isMenuOpened = false;
    // console.log("closeMenu()", isMenuOpened)

    // menuList.classList.remove("menu-items-appear");
    menuIcon.classList.remove('clicked')

    menuItemLink1.parentNode.classList.remove('opened')
    menuItemLink2.parentNode.classList.remove('opened')
    menuItemLink3.parentNode.classList.remove('opened')
    menuItemLink4.parentNode.classList.remove('opened')
    
    setTimeout(() => {
      // menuContactList.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      menuContactList.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
      menuContactList.style.transform = "translateX(10px)"
      // debugger
     
        setTimeout(() => {
          // menuItemLink4.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          // menuItemLink4.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          menuItemLink4.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
          menuItemLink4.style.transform = "translateX(40px)"
          // debugger
          setTimeout(() => {
            // menuItemLink3.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
            // menuItemLink3.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            menuItemLink3.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
            menuItemLink3.style.transform = "translateX(40px)"
            // debugger
            
            setTimeout(() => {
              // menuItemLink2.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
              // menuItemLink2.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
              menuItemLink2.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
              menuItemLink2.style.transform = "translateX(40px)"
              // debugger
              setTimeout(() => {
                // menuItemLink1.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
                // menuItemLink1.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                menuItemLink1.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
                menuItemLink1.style.transform = "translateX(40px)"

                menuIcon.classList.remove('opened')
                // debugger
                setTimeout(() => {
                // menuContainer.style.clipPath = "circle(0% at 50% 0)"
                menuContainer.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"         
           
                },400)
              },40)
            },40)
          },40)
        },40)
      
    },120)

  
}


menuItemLinks.forEach(menuItemLink => {
  menuItemLink.addEventListener("click",()=>{
    setTimeout(()=>{
      closeMenu()
    }, 400)
  })
   
});


const socialIcons = document.querySelectorAll("footer article.upper div.social-icons a");
const copyright = document.querySelector("footer article.lower div.copyright");
const privacyTerms = document.querySelector("footer article.lower div.privacy-terms");
const developedBy = document.querySelector("footer article.lower div.developed-by");
const menuNavItems = document.querySelectorAll("nav.menu-nav ul.menu-items li");
const menuContactText = document.querySelector("nav.menu-nav ul.contact li");
const logo = document.querySelector(".logo");
const navItems = document.querySelectorAll(".nav-item");
const searchBtn = document.querySelector(".search-btn");
const menuBtn = document.querySelector(".menu-btn");


const imgContainer = document.querySelector(".img-container");
// const artworkInfos = document.querySelectorAll(".artwork__info");
const tracker = document.querySelector(".cursor");


imgContainer.addEventListener('mousemove', function(e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px) scale(1.12)';
  
    
  })
  
  imgContainer.addEventListener('mouseleave', function() {
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  
  })

// FOOTER
copyright.addEventListener('mousemove', function(e) {
  tracker.classList.add('active')
})
copyright.addEventListener('mouseleave', function() {
  tracker.classList.remove('active')
})
privacyTerms.addEventListener('mousemove', function(e) {
  tracker.classList.add('active')
})
privacyTerms.addEventListener('mouseleave', function() {
  tracker.classList.remove('active')
})
developedBy.addEventListener('mousemove', function(e) {
  tracker.classList.add('active')
})
developedBy.addEventListener('mouseleave', function() {
  tracker.classList.remove('active')
})
socialIcons.forEach(socialIcon => socialIcon.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;

  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  tracker.classList.add('active')
}));

socialIcons.forEach(socialIcon => socialIcon.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
}));

// MENU NAV ITEMS
menuNavItems.forEach(navItem => navItem.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;

  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  tracker.classList.add('active')
}));

menuNavItems.forEach(navItem => navItem.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
}));

menuContactText.addEventListener('mousemove', function(e) {
  tracker.classList.add('active')
  
})

menuContactText.addEventListener('mouseleave', function() {
  tracker.classList.remove('active')

})



//NAV ITEMS
navItems.forEach(navItem => navItem.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  // this.classList.add('active')
  tracker.classList.add('active')
}));

navItems.forEach(navItem => navItem.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
}));

// SEARCH BTN
searchBtn.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  // this.classList.add('active')
  tracker.classList.add('active')
})

searchBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
})

// MENU BTN
menuBtn.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  // this.classList.add('active')
  tracker.classList.add('active')
})

menuBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
})
// LOGO
logo.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  //  console.log(this, pos)
  this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';

  // this.classList.add('active')
  tracker.classList.add('active')
})

logo.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  // this.classList.remove('active')
  tracker.classList.remove('active')
})

document.addEventListener("mousemove", e => {
  tracker.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});