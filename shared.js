
// opening and closing mobile navigation - START

  let backdrop = document.querySelector(".backdrop");
  let toggleButton = document.querySelector(".toggle-button");
  let mobileNav = document.querySelector(".mobile-nav");
  
  
 toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
  }); 

  backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
  });

  // opening and closing mobile navigation - END
 
  
  
  