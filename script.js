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

const menuContactParagraph = document.querySelector('header.big-screen nav ul.contact li p');
const menuContactLink = document.querySelector('header.big-screen nav.menu-nav ul.contact li a');

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
      menuContainer.style.clipPath = "circle(200% at 50% 0)"

            setTimeout(() => {

              // console.log(menuItemLink1.parentNode)
              menuItemLink1.parentNode.classList.toggle('opened')
              menuItemLink2.parentNode.classList.toggle('opened')
              menuItemLink3.parentNode.classList.toggle('opened')
              menuItemLink4.parentNode.classList.toggle('opened')
              setTimeout(() => {
                menuItemLink1.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                menuItemLink1.style.transform = "translateY(0px)"
          
                  setTimeout(() => {
                   
                    menuItemLink2.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    menuItemLink2.style.transform = "translateY(0px)"
                    setTimeout(() => {
                      menuIcon.classList.toggle('clicked')
                   
                      setTimeout(() => {
                        menuItemLink3.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                        menuItemLink3.style.transform = "translateY(0px)"

                        setTimeout(() => {
                          menuItemLink4.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                          menuItemLink4.style.transform = "translateY(0px)"

                          setTimeout(() => {
                            menuContactParagraph.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                            menuContactParagraph.style.transform = "translateY(0px)"
                            setTimeout(() => {
                              menuContactLink.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                              menuContactLink.style.transform = "translateY(0px)"
                            }, 40)
                          }, 40)
                        }, 40)
                      }, 20)
                    }, 20)

                  }, 20)
              }, 20)
            }, 20)

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
      menuContactLink.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      menuContactLink.style.transform = "translateY(20px)"
      // debugger
      setTimeout(() => {
        menuContactParagraph.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        menuContactParagraph.style.transform = "translateY(20px)"
        // debugger
        setTimeout(() => {
          menuItemLink4.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          menuItemLink4.style.transform = "translateY(40px)"
          // debugger
          setTimeout(() => {
            menuItemLink3.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
            menuItemLink3.style.transform = "translateY(40px)"
            // debugger
            
            setTimeout(() => {
              menuItemLink2.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
              menuItemLink2.style.transform = "translateY(40px)"
              // debugger
              setTimeout(() => {
                menuItemLink1.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
                menuItemLink1.style.transform = "translateY(40px)"
                // debugger
                setTimeout(() => {
                menuContainer.style.clipPath = "circle(0% at 50% 0)"
              

           
                },100)
              },40)
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



