
$(document).ready(function(){



	/*   menu   */

	$(".toggle-button").click(function(){
		$("nav").toggleClass("active_nav");
		$(".sandwich").toggleClass("active");
	});

	/*   menu end  */

  // PAGINATION
  console.log(window.innerWidth)
  $('.pagination').pagination({
    dataSource: (done) => {
      const result = []
      for (let i = 1; i < 26; i++) {
        result.push(i);
      }
      done( result)
    },
    activeClassName: 'paginationActive',
    pageSize: 1,
    pageRange: window.innerWidth < 1280 ? 2 : 7,
    callback: function(data, pagination) {
      // template method of yourself
      // var html = template(data);
      // dataContainer.html(html);
    }
  })

  // PAGINATION END

    /*   sidebar menu   */

    if($(window).width() < 950 ){

        $(".sidebar__menu > ul > li a").click(function(e){
            e.preventDefault();
            $(this).next("ul").toggleClass("active_sidebar");
        });
    }

    $(window).resize(function(){

    if($(window).width() < 950 ){

        $(".sidebar__menu > ul > li a").click(function(e){
            e.preventDefault();
            $(this).next("ul").toggleClass("active_sidebar");
        });
    }
    })

    /*   sidebar menu end  */

  /*   filter slider   */

  $( "#filter__price" ).slider({
        range: true,
        min: 2000,
        max: 20000,
        values: [ 4500, 15500 ],
        slide: function( event, ui ) {

          $( "#first_price" ).val( ui.values[ 0 ] );
          $( "#last_price" ).val( ui.values[ 1 ] );

        }
      });

  $( "#filter__height" ).slider({
        range: true,
        min: 20,
        max: 100,
        values: [ 50, 70 ],
        slide: function( event, ui ) {

          $( "#first_height" ).val( ui.values[ 0 ] );
          $( "#last_height" ).val( ui.values[ 1 ] );

        }
      });


  $( "#filter__width" ).slider({
        range: true,
        min: 20,
        max: 100,
        values: [ 50, 70 ],
        slide: function( event, ui ) {

          $( "#first_width" ).val( ui.values[ 0 ] );
          $( "#last_width" ).val( ui.values[ 1 ] );

        }
      });

  $( "#filter__depth" ).slider({
        range: true,
        min: 20,
        max: 100,
        values: [ 50, 70 ],
        slide: function( event, ui ) {

          $( "#first_depth" ).val( ui.values[ 0 ] );
          $( "#last_depth" ).val( ui.values[ 1 ] );

        }
      });


  /*   filter slider end  */



  /* filter custom scroll */


  $(".filter__item_in").mCustomScrollbar({
      theme:"minimal-dark"
  });


  /* filter custom scroll */



  /*   filter hide   */


  $(".filter__hide-button span").click(function(){
    $(".filter__hide").slideToggle();

    $(this).find("i").toggleClass("active_arrow")

    if ($.trim($(this).find("q").text()) === 'Показать') {
        $(this).find("q").text('Свернуть');
    } else {
        $(this).find("q").text('Показать');
    }
  });

  /*   filter hide end  */



  /*  to-top button   */

  $('.to-top').click(function(e){
  e.preventDefault();
  $('body, html').animate({ scrollTop: 0}, 1000);
  });


  $(window).scroll(function() {

      if ($(this).scrollTop() < 1000)
       {
          $('.to-top').fadeOut();
       }
      else
       {
        $('.to-top').fadeIn();
       }
   });



  /*  to-top button end  */

























	/*   brand select   */

	// $(".calc__choose-button").click(function(e){
	// 	e.preventDefault();
	// 	$(this).siblings("ul").slideToggle("fast");
	// });

	// $(".calc__choose-list ul li").click(function(){
	// 	var txt = $(this).text();
	// 	$(this).parent("ul").slideToggle("fast");
	// 	// $(this).parent(".calc__choose-list").find("span").text(txt);
	// 	$(this).parent("ul").siblings("span").text(txt);
	// });

	/*   brand select end  */


	/*  menu scroll   */

	// $('.to-map-wrap').click(function(e){
	// e.preventDefault();
	// $('body, html').animate({ scrollTop: $('.map-wrap').offset().top}, 1000);
	// });

	// $('.to-slider-wrap').click(function(e){
	// e.preventDefault();
	// $('body, html').animate({ scrollTop: $('.slider-wrap').offset().top}, 1000);
	// });

	// $('.to-about').click(function(e){
	// e.preventDefault();
	// $('body, html').animate({ scrollTop: $('.about').offset().top}, 1000);
	// });

 //  $('.to-info').click(function(e){
 //  e.preventDefault();
 //  $('body, html').animate({ scrollTop: $('.info').offset().top}, 1000);
 //  });

 //  $('.to-footer').click(function(e){
 //  e.preventDefault();
 //  $('body, html').animate({ scrollTop: $('footer').offset().top}, 1000);
 //  });



	/*  menu scroll end  */

  /*  scroll animation   */

  //   var controller = new ScrollMagic.Controller();

  //   $("h2").each(function(){

  //   var firstScene = new ScrollMagic.Scene({
  //     triggerElement: this,
  //     triggerHook: 0.7,
  //     reverse: false
  //   })
  //   // .setTween(TweenMax.to($(this), 0.5, {"transform": "rotate()", "opacity": 1}))
  //   .setClassToggle(this, "active_after")
  //   .addTo(controller);

  //   });




  // var secondScene = new ScrollMagic.Scene({
  //   triggerElement: ".why",
  //   reverse: false,
  //   triggerHook: 0.5,
  // })
  // .setClassToggle(".why__item", "active_why")
  // .addTo(controller);


  /*  to-top button   */

  // $('.to-top').click(function(e){
  // e.preventDefault();
  // $('body, html').animate({ scrollTop: 0}, 1000);
  // });


  // $(window).scroll(function() {

  //     if ($(this).scrollTop() < 1000)
  //      {
  //         $('.to-top').fadeOut();
  //      }
  //     else
  //      {
  //       $('.to-top').fadeIn();
  //      }
  //  });



  /*  to-top button end  */






   // $('.slider').slick({
   //   dots: false,
   //   arrows: true,
   //   infinite: true,
   //   speed: 500,
   //   slidesToShow: 1,
   //   slidesToScroll: 1,
   // });






}); // ready()





