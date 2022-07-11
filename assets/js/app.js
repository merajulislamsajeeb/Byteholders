// Pre loader code
function loader() {
  $(window).on("load", function () {
    $("#ctn-preloader").addClass("loaded");
    // Una vez haya terminado el preloader aparezca el scroll

    if ($("#ctn-preloader").hasClass("loaded")) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $("#preloader")
        .delay(900)
        .queue(function () {
          $(this).remove();
        });
    }
  });
}
loader();

if ($('[data-toggle="tooltip"]').length) {
  $('[data-toggle="tooltip"]').tooltip();
}

// Sticky menu section JS
window.addEventListener("scroll", ()=>{
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})










// Arafat Section typejs and slickjs Start
jQuery(document).ready(function () {
    jQuery(".expandable-menu").click(function () {
      jQuery(".expandable-menu-items").addClass("open-expandable-menu-items");
      return false;
    });
    jQuery("#close-expandable-menu-icon").click(function () {
      jQuery(".expandable-menu-items").removeClass("open-expandable-menu-items");
      return false;
    });
  
    $(".team-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    var typed = new Typed("#typed", {
      stringsElement: "#animated-text",
      showCursor: false,
      loopCount: Infinity,
      loop: false,
      typeSpeed: 30,
      backSpeed: 30,
      startDelay: 100,
      backDelay: 4000,
    });
  });
  
// Arafat Section End

// Oytizo vai Mix It Up Start
jQuery(document).ready(function(){
    var mixer = mixitup(".myfilter");
    jQuery("#indiv1").mouseenter(function(){
        jQuery("#v1").css("display", "block");
      });
      jQuery("#indiv1").mouseleave(function(){
        jQuery("#v1").css("display", "none");
      });
      jQuery("#indiv2").mouseenter(function(){
        jQuery("#v2").css("display", "block");
      });
      jQuery("#indiv2").mouseleave(function(){
        jQuery("#v2").css("display", "none");
      });
      jQuery("#indiv3").mouseenter(function(){
        jQuery("#v3").css("display", "block");
      });
      jQuery("#indiv3").mouseleave(function(){
        jQuery("#v3").css("display", "none");
      })
      jQuery("#indiv4").mouseenter(function(){
        jQuery("#v4").css("display", "block");
      });
      jQuery("#indiv4").mouseleave(function(){
        jQuery("#v4").css("display", "none");
      })
      jQuery("#indiv5").mouseenter(function(){
        jQuery("#v5").css("display", "block");
      });
      jQuery("#indiv5").mouseleave(function(){
        jQuery("#v5").css("display", "none");
      })
      jQuery("#indiv6").mouseenter(function(){
        jQuery("#v6").css("display", "block");
      });
      jQuery("#indiv6").mouseleave(function(){
        jQuery("#v6").css("display", "none");
      })
})
// Oytizo vai Mix It Up End

// Get In Touch Contact Form JS Code
const labels = document.querySelectorAll('.form-div label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => 
        `<span style="transition-delay:${idx * 60}ms">${letter}</span>`
        ).join('');
})

// FAQ SECTION JS CODE
const faq = document.querySelectorAll('.faq');
const icon = document.querySelectorAll('.faq-content .faq-wrapper .faq .icon');

faq.forEach(para =>{
    para.addEventListener('click',()=>{
        para.classList.toggle('active')
    })
})

