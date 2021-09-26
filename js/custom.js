jQuery(document).ready(function ($) {
  // Welcome rotating texts
  $("#welcome .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 2000,
  });

  // Initiate the wowjs
  new WOW().init();

  // Stick the header at top on scroll
  $("#header").sticky({ topSpacing: 0, zIndex: "50" });


  // Mobile Navigation (Menu responsive)
  if( $('#nav-menu-container').length ) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
    $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
    $('body').append( $mobile_nav );
    $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
    $('body').append( '<div id="mobile-body-overly"></div>' );
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
    /*
    $(document).on('click', '.menu-has-children i', function(e){
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });
    */
    $(document).on('click', '#mobile-nav-toggle', function(e){
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
    });
    
    $(document).click(function (e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
           if ( $('body').hasClass('mobile-nav-active') ) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
        }
    });
} else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
}

  // Smoth scroll on page hash links (Transición suave entre hash links)
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            
            var top_space = 0;
            
            if( $('#header').length ) {
              top_space = $('#header').outerHeight();
            }
            
            $('html, body').animate({
                scrollTop: target.offset().top - top_space
            }, 1500, 'easeInOutExpo');
            
            if ( $(this).parents('.nav-menu').length ) {
              $('.nav-menu .menu-active').removeClass('menu-active');
              $(this).closest('li').addClass('menu-active');
            }

            if ( $('body').hasClass('mobile-nav-active') ) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
            
            return false;
        }
    }
});

  
  /*--------------------------------------------------------------
# Carousel
--------------------------------------------------------------*/
  // Guardar el contenedor principal
  let containerSlider = $("#slider");

  // Guardar las secciones del slider
  let sectionSlider = containerSlider.find(".section-slider");

  // Guardar numero de secciones
  let sectionLength = sectionSlider.length;

  // Crear un contenedor interno
  containerSlider.wrapInner('<div class=" slider-inner" />');
  let containerInner = $(".slider-inner");

  // Definir el ancho del contenedor interno
  containerInner.css({
    width: 100 * sectionLength + "%",
  });

  sectionSlider.css({
    width: 100 / sectionLength + "%",
  });

  // Crear botones para avanzar y retroceder
  containerSlider.after(
    '<i id="prev" class="fa fa-chevron-left arrows prev" aria-hidden="true"></i>'
  );
  containerSlider.after(
    '<i id="next" class="fa fa-chevron-right arrows next" aria-hidden="true"></i>'
  );

  // Guardar los botones en variables
  let prev = $("#prev");
  let next = $("#next");

  // Envolver los botones
  next.add(prev).wrapAll('<div class="slider-nav" />');

  /*
		Crear la función para navegar entre los slides
	*/

  // Indice para moverse entre los slides
  let i = 0;

  // Escribir la función para moverse
  function moveSlider() {
    if (i == 0) {
      containerInner.css({
        left: 0 + "%",
      });
    } else if (i > 0) {
      containerInner.css({
        left: "-" + 100 * i + "%",
      });
    }
  }

  // Validación para moverse a la siguiente imágen
  next.on("click", function moveNextSlider() {
    if (i < sectionLength - 1) {
      i++;
      moveSlider();
    }
  });

  // Validación para moverse a la anterior imágen
  prev.on("click", function movePrevSlider() {
    if (i > 0) {
      i--;
      moveSlider();
    }
  });

  // Ejecuta el slider automáticamente
  let autoSlider = setInterval(function moveAutoSlider() {
    // Si el menú esta de color negro o el slider tiene la clase stop-slider no sigue el slider en automático
    if ($("#slider").hasClass("stop-slider")) {
      clearInterval(autoSlider);
    }

    // En caso de que este posicionado en la 1ra imágen del slider se ejecuta automáticamente cada 5 segundos    
    else if (i < sectionLength - 1) {
      moveSlider(i++);
    }
  }, 3000);

      	// Validación para cuando le den click al botón de la hamburguesa, los links del menu, al logo del menú, las flechas del slider y la flecha de la siguiente sección
	// Le agregue al slider la clase stop-slider así cuando se cumpla la condicional de la función moverAutomaticamenteSlider
	$('#arrow-down-slider, .arrows').on('click', function() {
		$('#slider').addClass('stop-slider');
	});

	// Validación para que cuando el scroll este en una posicón distinta a arriba osea a 0px el slider se detenga y deje de ser automático
	/*$(window).on('load scroll resize', function() {
		if ($(this).scrollTop() <= 0) {
			$('#slider').addClass('stop-slider');
    } 

  });*/


  // Si pasamos el cursor por el slider aparecen las flechas de lo contrario se ocultan
  $("#ctn-slider").hover(function () {
    $(".arrows").fadeToggle();
  });

    // Validacion para que con el gesto de dezlizar se pasen las imgs del slider
	let interactiveElements = $('#arrow-down-slider, .arrows');
	let active = 1;
  let tolerance = 100;
  
  // Validación para que cuando le de click a la flecha del slider lo lleve a la siguiente sección osea servicios, contacto, quiénes somos y soporte
	$('#arrow-down-slider').on('click', function() {
    $('html').animate({
      scrollTop: $('#about').offset().top - 90
    }, 1000);
	});


  //scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
  });
  
});
