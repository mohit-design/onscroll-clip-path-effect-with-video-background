$(function() {
  // Banner Video JS
  const bgBanner = document.querySelector(".bg-banner");
  window.addEventListener('scroll', function () {
    const value = 1100 - window.scrollY;
    bgBanner.style.clipPath = "circle(" + value + "px at center center)";
  });
  $(window).resize(function() {
    if ($(window).width() > 992) {
      const bgBanner = document.querySelector(".bg-banner");
      window.addEventListener('scroll', function () {
        const value = 992 - window.scrollY;
        bgBanner.style.clipPath = "circle(" + value + "px at center center)";
      });
    } else if ($(window).width() > 768) {
      const bgBanner = document.querySelector(".bg-banner");
      window.addEventListener('scroll', function () {
        const value = 768 - window.scrollY;
        bgBanner.style.clipPath = "circle(" + value + "px at center center)";
      });
    } else if ($(window).width() < 768) {
      const bgBanner = document.querySelector(".bg-banner");
      window.addEventListener('scroll', function () {
        const value = 320 - window.scrollY;
        bgBanner.style.clipPath = "circle(" + value + "px at center center)";
      });
    }
  });
});