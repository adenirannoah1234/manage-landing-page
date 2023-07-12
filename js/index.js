const openNav = document.querySelector(".ri-menu-line");

const closeNav = document.querySelector(".ri-close-circle-line");

const navList = document.querySelector("nav ul");

openNav.addEventListener("click", function() {

    navList.style.top = "60%"

    openNav.style.display = "none"

    closeNav.style.display = "block"

})

closeNav.addEventListener("click", function() {

    navList.style.top = "-60%"

    openNav.style.display = "block"

    closeNav.style.display = "none"

})

document.querySelectorAll("nav ul a").forEach(navLink => {

    navLink.addEventListener("click", function() {

        navList.style.top = "-60%"

        openNav.style.display = "block"

        closeNav.style.display = "none"

    })

})
$(".parent2").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
