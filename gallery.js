
  const bodyEl = document.querySelector('body')
  const headerEl = document.querySelector('header')
  const mainEl = document.querySelector('main')
  const footerEl = document.querySelector('footer')
  const loadigScreen = document.querySelector('div.loading-screen')
  
  const artworkApp = document.querySelector('div#artwork-app')
  const artworkWrapper = document.querySelector('div.img-wrapper.img-gallery')
  const imgContainers = document.querySelectorAll('div.img-wrapper figure.img-container.gallery-image')
  const artworkImg = document.querySelector('div.img-wrapper figure.img-container img')
  // const artworkHeading = document.querySelector('div.about__text h1.heading-primary')
  const artworkParagraphs = document.querySelector('div.about__text div.radial-beams-paragraphs div.paragraphs')
  
  
  function loading() {      
    setTimeout(() => {
        // bodyEl.style.overflowY = "scroll"
        headerEl.style.display = 'flex';
        mainEl.style.display = 'flex';
        footerEl.style.display = 'flex';
        
        setTimeout(() => {
            loadigScreen.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
        }, 550);
    }, 250);
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
  const logo = document.querySelector("#logo");
  const navItems = document.querySelectorAll(".nav-item");
  const searchBtn = document.querySelector(".search-btn");
  const menuBtn = document.querySelector(".menu-btn");
  
  
  // const imgContainers = document.querySelectorAll(".img-container");
  // const artworkInfos = document.querySelectorAll(".artwork__info");
  const tracker = document.querySelector(".cursor");
  
  
  
  // IMG CONTAINER
  function interactWithImgContainer(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.2 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.05 +', '+ my * -0.1 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px) scale(1.01)';
    // this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    // this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    // this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px) scale(1.1)';
  }
  function dontInteractWithImgContainer(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
  }
  
  // ARTWORK CONTENTS
  function interactWithHeading(e) {
    tracker.classList.add('active')
  }
  function dontInteractWithHeading(e) {
    tracker.classList.remove('active')
  }
  function interactWithParagraph(e) {
    tracker.classList.add('active')
  }
  function dontInteractWithParagraph(e) {
    tracker.classList.remove('active')
  }
  
  // FOOTER
  function interactWithCopyright(e) {
    tracker.classList.add('active')
  }
  function dontInteractWithCopyright(e) {
    tracker.classList.remove('active')
  }
  function interactWithPrivacyTerms(e) {
    tracker.classList.add('active')
  }
  function dontInteractWithPrivacyTerms(e) {
    tracker.classList.remove('active')
  }
  function interactWithDevelopedBy(e) {
    tracker.classList.add('active')
  }
  function dontInteractWithDevelopedBy(e) {
    tracker.classList.remove('active')
  }
  function interactWithSocialIcon(e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
  
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    tracker.classList.add('active')
  }
  function dontInteractWithSocialIcon(e) {
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  // MENU NAV ITEMS
  function interactWithNavItem(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
  
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    tracker.classList.add('active')
  }
  function dontInteractWithNavItem(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  function interactWithMenuContactText(e){
    tracker.classList.add('active')
  }
  function dontInteractWithMenuContactText(e){
    tracker.classList.remove('active')
  }
  
  
  //NAV ITEMS
  function interactWithNavItem(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    // this.classList.add('active')
    tracker.classList.add('active')
  }
  function dontInteractWithNavItem(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  // SEARCH BTN
  function interactWithSearchBtn(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    // this.classList.add('active')
    tracker.classList.add('active')
  }
  function dontInteractWithSearchBtn(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  // MENU BTN
  function interactWithMenuBtn(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    // this.classList.add('active')
    tracker.classList.add('active')
  }
  function dontInteractWithMenuBtn(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  // LOGO
  function interactWithLogo(e){
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width/2; 
    const my = e.clientY - pos.top - pos.height/2;
    //  console.log(this, pos)
    this.style.transform = 'translate('+ mx * 0.3 +'px, '+ my * 0.6 +'px)';
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
    this.children[0].style.transform = 'translate('+ mx * 0.075 +'px, '+ my * 0.125 +'px)';
  
    // this.classList.add('active')
    tracker.classList.add('active')
  }
  function dontInteractWithLogo(e){
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
    // this.classList.remove('active')
    tracker.classList.remove('active')
  }
  
  
  
  // MOUSE TRACKER
  const mediaQuery = window.matchMedia("(min-width: 1120px)");
  function myFunction(mediaQuery) {
    if (mediaQuery.matches) {
      // IMG CONTAINER
      imgContainers.forEach(imgContainer => imgContainer.addEventListener('mousemove', interactWithImgContainer));
      imgContainers.forEach(imgContainer => imgContainer.addEventListener('mouseleave', dontInteractWithImgContainer));
    //   imgContainer.addEventListener('mousemove', interactWithImgContainer)
    //   imgContainer.addEventListener('mouseleave', dontInteractWithImgContainer)
      
    //   // ARTWORK CONTENTS
    //   artworkHeading.addEventListener('mousemove', interactWithHeading)
    //   artworkHeading.addEventListener('mouseleave', dontInteractWithHeading)
    //   artworkParagraphs.addEventListener('mousemove', interactWithParagraph)
    //   artworkParagraphs.addEventListener('mouseleave', dontInteractWithParagraph)
  
      // FOOTER
      copyright.addEventListener('mousemove', interactWithCopyright)
      copyright.addEventListener('mouseleave', dontInteractWithCopyright)
      privacyTerms.addEventListener('mousemove', interactWithPrivacyTerms)
      privacyTerms.addEventListener('mouseleave', dontInteractWithPrivacyTerms)
      developedBy.addEventListener('mousemove', interactWithDevelopedBy)
      developedBy.addEventListener('mouseleave', dontInteractWithDevelopedBy)
      socialIcons.forEach(socialIcon => socialIcon.addEventListener('mousemove', interactWithSocialIcon));
      socialIcons.forEach(socialIcon => socialIcon.addEventListener('mouseleave', dontInteractWithSocialIcon));
  
      // MENU NAV ITEMS
      menuNavItems.forEach(navItem => navItem.addEventListener('mousemove', interactWithNavItem));
      menuNavItems.forEach(navItem => navItem.addEventListener('mouseleave', dontInteractWithNavItem));
      menuContactText.addEventListener('mousemove', interactWithMenuContactText)
      menuContactText.addEventListener('mouseleave', dontInteractWithMenuContactText)
  
      //NAV ITEMS
      navItems.forEach(navItem => navItem.addEventListener('mousemove', interactWithNavItem));
      navItems.forEach(navItem => navItem.addEventListener('mouseleave', dontInteractWithNavItem));
  
      // SEARCH BTN
      searchBtn.addEventListener('mousemove', interactWithSearchBtn)
      searchBtn.addEventListener('mouseleave', dontInteractWithSearchBtn)
  
      // MENU BTN
      menuBtn.addEventListener('mousemove', interactWithMenuBtn)
      menuBtn.addEventListener('mouseleave', dontInteractWithMenuBtn)
  
      // LOGO
      logo.addEventListener('mousemove', interactWithLogo)
      logo.addEventListener('mouseleave', dontInteractWithLogo)
  
      const tracker = document.querySelector(".cursor");
        document.addEventListener("mousemove", e => {
          tracker.setAttribute(
            "style",
            "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
          );
        });
        
    } else {
          // IMG CONTAINER
          imgContainers.forEach(imgContainer => {
            imgContainer.removeEventListener('mousemove', interactWithImgContainer)
          })
          imgContainers.forEach(imgContainer => {
            imgContainer.removeEventListener('mouseleave', interactWithImgContainer)
          })
          
  
          // ARTWORK CONTENTS
          // artworkHeading.addEventListener('mousemove', interactWithHeading)
          // artworkHeading.addEventListener('mouseleave', dontInteractWithHeading)
          // artworkParagraphs.addEventListener('mousemove', interactWithParagraph)
          // artworkParagraphs.addEventListener('mouseleave', dontInteractWithParagraph)
  
          // FOOTER
          copyright.removeEventListener('mousemove', interactWithCopyright)
          copyright.removeEventListener('mouseleave', dontInteractWithCopyright)
          privacyTerms.removeEventListener('mousemove', interactWithPrivacyTerms)
          privacyTerms.removeEventListener('mouseleave', dontInteractWithPrivacyTerms)
          developedBy.removeEventListener('mousemove', interactWithDevelopedBy)
          developedBy.removeEventListener('mouseleave', dontInteractWithDevelopedBy)
          socialIcons.forEach(socialIcon => socialIcon.removeEventListener('mousemove', interactWithSocialIcon));
          socialIcons.forEach(socialIcon => socialIcon.removeEventListener('mouseleave', dontInteractWithSocialIcon));
      
          // MENU NAV ITEMS
          menuNavItems.forEach(navItem => navItem.removeEventListener('mousemove', interactWithNavItem));
          menuNavItems.forEach(navItem => navItem.removeEventListener('mouseleave', dontInteractWithNavItem));
          menuContactText.removeEventListener('mousemove', interactWithMenuContactText)
          menuContactText.removeEventListener('mouseleave', dontInteractWithMenuContactText)
      
          //NAV ITEMS
          navItems.forEach(navItem => navItem.removeEventListener('mousemove', interactWithNavItem));
          navItems.forEach(navItem => navItem.removeEventListener('mouseleave', dontInteractWithNavItem));
      
          // SEARCH BTN
          searchBtn.removeEventListener('mousemove', interactWithSearchBtn)
          searchBtn.removeEventListener('mouseleave', dontInteractWithSearchBtn)
      
          // MENU BTN
          menuBtn.removeEventListener('mousemove', interactWithMenuBtn)
          menuBtn.removeEventListener('mouseleave', dontInteractWithMenuBtn)
      
          // LOGO
          logo.removeEventListener('mousemove', interactWithLogo)
          logo.removeEventListener('mouseleave', dontInteractWithLogo)
  
        const tracker = document.querySelector(".cursor");
        tracker.style.display = "none";
    }
  }
  myFunction(mediaQuery);
  mediaQuery.addEventListener('change', myFunction);



  // GALLERY FLIP ANIMATION
  const galleryImages = Array.from(document.querySelectorAll('div.img-wrapper figure.img-container.gallery-image'))
  const artworkDetail = document.querySelector('div.artwork-detail')

  // console.clear();

  // const elApp = document.querySelector("#app");
  
  // const elImages = Array.from(document.querySelectorAll(".gallery-image"));
  
  // const elDetail = document.querySelector(".detail");
  
  function flipImages(firstEl, lastEl, change) {
    const firstRect = firstEl.getBoundingClientRect();
  
    const lastRect = lastEl.getBoundingClientRect();
  
    // INVERT
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;
    const deltaW = firstRect.width / lastRect.width;
    const deltaH = firstRect.height / lastRect.height;
    
    // console.log(lastEl,lastRect,firstRect.width,lastRect.width)
  
    change();
    lastEl.parentElement.dataset.flipping = true;
  
    const animation = lastEl.animate([
      {
        transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
      },
      {
        transform: 'none'
      }
    ], {
      duration: 500,
      easing: 'ease'
    });
  
    animation.onfinish = () => {
      delete lastEl.parentElement.dataset.flipping;
    }
  
  }
  
  galleryImages.forEach(figure => {
  
    figure.addEventListener("click", () => {
      const elImage = figure.querySelector('img');

      sessionStorage.getItem("artworkIDNumber");
      sessionStorage.setItem("artworkIDNumber", elImage.dataset.artworkid);
  
      artworkDetail.innerHTML = "";
  
      const elClone = figure.cloneNode(true);
      artworkDetail.appendChild(elClone);
      let artworkNameLink = document.createElement('a')
      artworkNameLink.href = "./artwork.html"
      let artworkNameHeading = document.createElement('h2')
      artworkNameHeading.innerHTML = elImage.alt

      artworkNameLink.appendChild(artworkNameHeading)
      artworkDetail.appendChild(artworkNameLink)
      
      
      const elCloneImage = elClone.querySelector('img');
      // console.log(elCloneImage)
  
      flipImages(elImage, elCloneImage, ()=>{
        artworkApp.dataset.state="detail";
      });
  
      function revert(){
  
        flipImages(elCloneImage, elImage, ()=>{
          artworkApp.dataset.state="gallery";
          artworkDetail.innerHTML = "";
          artworkDetail.removeEventListener('click',revert);
        });
  
      }
  
      artworkDetail.addEventListener('click',revert);
  
    });
  });