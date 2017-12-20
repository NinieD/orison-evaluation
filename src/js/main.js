////////////////////////
/////     NAV      /////
////////////////////////

///////MOBILE///////////
$('.navigation__container__burger').click(function(event) {
    $('.navigation__container__links').slideToggle('slow');
});

///////DESKTOP//////////
$(window).scroll(function(){
    /// variable locale ///
    var scrollVal = $(window).scrollTop();

    if (window.matchMedia("(min-width: 1024px)").matches){

        if(scrollVal > 80){
            $('.navigation').addClass('color');
        }else{
            $('.navigation').removeClass('color');
        }
    }
});

/////////////////////////
//////API FLICKR/////////
/////////////////////////

$(document).ready(function() {
    var sourcePix   = $("#pix").html();
    var templatePix = Handlebars.compile(sourcePix);

    // API
    var url     = "https://api.flickr.com/services/rest/";
    var option = {
        api_key: "be39ed909c012ebdf5726ca2873cfefe",
        method: "flickr.photos.search",
        format : "json",
        nojsoncallback: 1,
        extras: 'url_q',
        text:'picture',
        tags: "lamps",
        page:1,
        per_page: 20,

    };

    $.getJSON(url, option)
       .done(function(data) {
         $(".owl-carousel").html(templatePix(data.photos.photo));
         $('.owl-carousel').trigger('destroy.owl.carousel');
         $('.owl-carousel').owlCarousel({
             loop:true,
             margin:10,
             nav:true,
             responsive:{
                 0:{
                     items:2
                 },
                 600:{
                     items:3
                 },
                 1000:{
                     items:5
                 }
             }
         });
     });
});
/////////////////////////
//////API google/////////
/////////////////////////
var map;
      function initMap() {
        var home = {lat: 37.4219999, lng: -122.08405749999997};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
          center: home,
          // gestureHandling : 'cooperative',
          styles:[
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ]

        });
        var image = '../img/marker-orison.png';
        var marker = new google.maps.Marker({
          position: home,
          map: map,
          animation: google.maps.Animation.DROP,
          icon:image
        });
      }
      /////////////////////////
      //////PARALLAX/////////
      /////////////////////////
      $('.parallax-1').parallax(
          {imageSrc: 'img/blog-cvr-9-26.jpg'
      });
