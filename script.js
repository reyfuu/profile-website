$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 100) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  //type animation
  let typed1 = new Typed(".typing", {
    strings: ["Designer", "Freelancer", "Entrepreneur", "Tutor", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  let typed = new Typed(".typing2", {
    strings: ["Designer", "Freelancer", "Entrepreneur", "Tutor", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  //   toggle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
