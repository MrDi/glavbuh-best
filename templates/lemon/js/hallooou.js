jQuery(document).ready(function(){
    var summ1=0,
        summ2=0,
        itog_summ=0,
        dop=0;


    
  jQuery(document).on('change','.sel select', function(e){
       summ1 =0;
    
       jQuery(".sel select").each(function() {
            var a = jQuery(this).val();
          summ1=summ1+a/1.0;
        });
      if(summ1!=0) jQuery('.white_back.tabs').addClass('show');
      else{jQuery('.white_back.tabs').removeClass('show');}
        
      if(summ2!=0)itog_summ = summ1*(1+summ2)+dop;
      else{itog_summ=summ1+dop;}
    
       jQuery('.dinamic_price_summ').html( Math.round(itog_summ).toFixed(0));
      
  });  
    
  jQuery(document).on('click','.show .checkbox_switch', function(e){
    summ2 =0;
    var id_click = e.target.id;
    var index = id_click.substring(6);
   
      
       if(jQuery("#active-"+index).hasClass('sel')){
           jQuery("#active-"+index).removeClass("sel");
           jQuery("#check-"+index).removeClass("checkbox_self");
           
        }
        else{
         jQuery("#active-"+index).addClass("sel");
         jQuery("#check-"+index).addClass("checkbox_self");
        } 

        jQuery("input.sel").each(function() {
            var a = jQuery(this).val();
            if(a==2000){a=0;dop=2000;}
            else dop=0;
          summ2=summ2+a/1.0;
        });
      
      
      itog_summ = summ1*(1+summ2)+dop;
      
   jQuery('.dinamic_price_summ').html( Math.round(itog_summ).toFixed(0));

});  
   
    
    
jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 50) {
        jQuery(".navbar-fixed-top").addClass("top-nav-collapse");
        jQuery(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        jQuery(".navbar-fixed-top").removeClass("top-nav-collapse");
        jQuery(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
});

jQuery.detect_mob = function(){
    if(jQuery("div").is(".blog")){
         if(jQuery(window).width()<700){
        
     prepend(jQuery('.moduletable.left_fixed'));
        jQuery('.moduletable.left_fixed').addClass('top');
        jQuery(".left_fixed").css({
        'top':'inherit',
        'left':'inherit'});
        
    }
    else{
            jQuery('aside').prepend(jQuery('.moduletable.left_fixed'));
            jQuery('.moduletable.left_fixed').removeClass('top');
 var a = jQuery(".blog").offset().left;
   var  top = jQuery(".items-leading.clearfix").offset().top;
   var b = jQuery(".blog").width(); 
           
            a = a+b+30; 

            jQuery("aside .left_fixed").css({
                'top':top,
                'left':a
            });
  
        
        
    } 
  }
    
    
    
   
}

jQuery(window).resize(function() {
     if(jQuery("div").is(".blog")){
     
      var a = jQuery(".blog").offset().left;
    var top = jQuery(".items-leading.clearfix").offset().top;
    var b = jQuery(".blog").width(); 
   
    jQuery.detect_mob();
     }
   
});




// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {
     if(jQuery("div").is(".blog")){
        
 jQuery("body").addClass('page_gray page_no_main');
        var text = jQuery('time').html();
text = text.replace('Опубликовано:','');

jQuery('time').html(text);
    }
    
    if(jQuery("div").is(".item-page")){
 jQuery("body").addClass('page_no_main');
    }
    
    
    jQuery('.overlay-menu ul li a,.scroll-top a').bind('click', function(event) {
        var jQueryanchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    jQuery.detect_mob();
 
});


// WOW.js initialise
// WOW.js uses animate.css to animate/reveal elements.
// Browse the list of animation effects available here-> https://daneden.github.io/animate.css/
jQuery(function() {
    wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
});


// jQuery Parallax. More info here-> https://github.com/IanLunn/jQuery-Parallax
jQuery(function(){
    
    var i = 0;
    // apply parallax effect only when body has the ".parallax-page" class
    if (jQuery('body').hasClass('parallax-page')) {
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        
        jQuery('#parallax-slide').parallax("50%", 0.1);
        jQuery('#products').parallax("50%", 0.1);
        jQuery('#portfolio').parallax("50%", 0.1);
        jQuery('#page-aboutus').parallax("50%", 0.1);
    }

  /*   if($(".mouse"){
       $("body").addClass('page_no_main');
       alert('sd');
    }*/


    
    jQuery('#ariext96_container').append('<ul class="left_ul"></ul>');
     jQuery('#ariext96_container').append('<ul class="right_ul"></ul>');
   // jQuery('.left_ul').append( $('ul.ux-menu-sub li') );
    
     jQuery('#overlay').append( $('<div class="over_backs"></div>') );
    
    jQuery('.over_backs').append( $('<div class="over_back left_over"></div>') );
    jQuery('.over_backs').append( $('<div class="over_back center_over"></div>') );
    jQuery('.over_backs').append( $('<div class="over_back right_over"></div>') );
    
      jQuery('.overlay-menu').prepend( $('<div class="back_nav"></div>') );
     var l_li = jQuery('.ux-menu-sub > li').length;
        //console.log("ли"+l_li);
    
    $(".ux-menu-sub > li").each(function(indx, element){

i++;
        if(i<4){
            jQuery('.left_ul').append( $(this) );
        }
        else{
             jQuery('.right_ul').append( $(this) );
        }
  
         
       
});
    
    
    
    
    

});



// Closes the Responsive Menu on Menu Item Click
jQuery('.overlay-menu ul li a').click(function() {
    //jQuery('.button_container:visible').click();
});




// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {
    jQuery('.back_nav').click(function() {
    jQuery('#overlay').removeClass('show_level2');
    jQuery('.back_nav').removeClass('show_back_nav');
});
    
    
    jQuery('a.page-scroll').bind('click', function(event) {
        var jQueryanchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        
    });
});




if(jQuery('li.ux-menu-item-main.ux-menu-item-level-0.ux-menu-item-parent').hasClass('current')){
   jQuery('a.ux-menu-link-level-0.ux-menu-link-parent').addClass('active_menu');
        jQuery('#overlay').addClass('show_level2');
}
else{
     jQuery('a.ux-menu-link-level-0.ux-menu-link-parent').removeClass('active_menu');
        jQuery('#overlay').removeClass('show_level2');
}


// Closes the Responsive Menu on Menu Item Click
jQuery('.navbar-collapse ul li a').click(function() {
    jQuery('.navbar-toggle:visible').click();
});

// Navigation show/hide
jQuery('.toggle').click(function() {
    if (jQuery('#overlay.open')) {
        jQuery(this).toggleClass('active');
        jQuery('#overlay').toggleClass('open');
    }
});

jQuery('a.ux-menu-link-level-0.ux-menu-link-parent').click(function() {
    if (jQuery('#overlay.open.show_level2')) {
        jQuery(this).toggleClass('active_menu');
        jQuery('#overlay').toggleClass('show_level2');
        jQuery('.back_nav').addClass('show_back_nav');
    }
});

    // 



// Client testimonials
jQuery(function() {

    var owl = jQuery(".client-testimonials");

    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

});


// Client Slider Carousel
jQuery(function() {

    var owl = jQuery(".client-slider");

    owl.owlCarousel({
        items: 4, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 2], //1 item between 480 and 0
        pagination: false, // Show pagination
        navigation: false // Show navigation
    });

});


// Recent Project Carousel
jQuery(function() {

    var owl = jQuery(".recent-project-carousel");

    owl.owlCarousel({
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });


    // Custom Navigation Events
    jQuery(".btn-next").on('click', function() {
        owl.trigger('owl.next');
    })
    jQuery(".btn-prev").on('click', function() {
        owl.trigger('owl.prev');
    })

});



// Counter
jQuery(function() {

    jQuery('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            jQuery(this).find('.timer').each(function() {
                var jQuerythis = jQuery(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: jQuerythis.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        jQuerythis.text(Math.ceil(this.Counter));
                    }
                });
            });
            jQuery(this).off('inview');
        }
    });

});


// Carousel Slider
jQuery(function() {
    interval: 8000 //changes the speed
});


// YouTube Player
jQuery(function() {
    jQuery(".player").mb_YTPlayer();

    jQuery('#video-play').click(function(event) {
        event.preventDefault();
        if (jQuery(this).hasClass('fa-play')) {
            jQuery('.player').playYTP();
        } else {
            jQuery('.player').pauseYTP();
        }
        jQuery(this).toggleClass('fa-play fa-pause');
        return false;
    });

    jQuery('#video-volume').click(function(event) {
        event.preventDefault();
        jQuery('.player').toggleVolume();
        jQuery(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });
});


// HTML5 Player
jQuery(function() {

    var vid = jQuery("#html5-video").get(0);

    jQuery('#html5-video-play').click(function(event) {
        event.preventDefault();
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
        jQuery(this).toggleClass('fa-play fa-pause');
        return false;
    });

    jQuery('#html5-video-volume').click(function(event) {
        event.preventDefault();
        if (vid.muted) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
        jQuery(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });
});



// Google map API
jQuery(function() {

    //set your google maps parameters
    var latitude = 40.7412541,
        longitude = -74.0040725,
        map_zoom = 14;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? 'assets/images/cd-icon-location.png' : 'assets/images/cd-icon-location.svg';

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f',
        saturation_value = -90,
        brightness_value = 2;

    //we define here the style of the map
    var style = [{
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [{
                saturation: saturation_value
            }]
        }, { //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show local road lables on the map
            featureType: "road.local",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show arterial road lables on the map
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }]
        },
        //style different elements on the map
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "landscape",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]

        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                hue: main_color
            }, {
                visibility: "on"
            }, {
                lightness: brightness_value
            }, {
                saturation: saturation_value
            }]
        }
    ];

    //set google map options
    var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map                
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        visible: true,
        icon: marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom() - 1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

});



// Lightbox
jQuery(function() {
    
    

    
    
    jQuery('.popup-gallery').magnificPopup({
        delegate: '.full-project a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Hallooou</small>';
            }
        }
    });

});



// Contact form
jQuery(function() {
    
    
    
    
    
    // validate contact form on keyup and submit
    jQuery("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            email: {
                required: true,
                minlength: 6,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            message: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Minimum 2 characters",
                lettersonly: "Only letters please!"
            },
            email: {
                required: "Please enter your email address",
                minlength: "Minimum 6 characters",
                email: "That's an invalid email"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Only digits (no spaces)",
                minlength: "Minimum 10 characters",
                maxlength: "Maximum 15 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Minimum 6 characters"
            }
        },
        success: function(label) {
            label.addClass("valid").text("Perfect!");
        },
        submitHandler: function(element) {

            var ajaxform = jQuery(element),
                url = ajaxform.attr('action'),
                type = ajaxform.attr('method'),
                data = {};

            jQuery(ajaxform).find('[name="submit"]').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Sending...');


            ajaxform.find('[name]').each(function(index, value) {
                var field = jQuery(this),
                    name = field.attr('name'),
                    value = field.val();

                data[name] = value;

            });

            jQuery.ajax({
                url: url,
                type: type,
                data: data,
                success: function(response) {
                    if (response.type == 'success') {
                        jQuery("#contactForm").before("<div class='alert alert-success' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        jQuery(ajaxform).each(function() {
                            this.reset();
                            jQuery(this).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                        }).find('.valid').each(function() {
                            jQuery(this).remove('label.valid');
                        })
                    } else if (response.type == 'error') {
                        jQuery("#contactForm").before("<div class='alert alert-danger' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        jQuery(ajaxform).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                    }
                }
            });

            return false;
        }
    });

});
});