// tesimonial section 



$('.r_js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    // dots: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
// bg color js
 $(window).scroll(function(){

    $scrollTop = $(this).scrollTop();
    if($scrollTop > 200){
      $(".navbar").addClass('nav_bg');
    }else{
      $(".navbar").removeClass('nav_bg');
    }

  });
