///Déclaration de variables

var $element = $('.element');
var $doc = $(document);
var elementOffset;
// var $docScroll = $doc.scrollTop();
var $winHeight = $(window).height();
var offset = 80;
var ratio = $winHeight * offset / 100;


$element.addClass('cacher');

$doc.on("scroll", function(){
    $element.each(function() {

        elementOffset = $(this).offset().top;
        if($doc.scrollTop() > (elementOffset - ratio) && $(this).hasClass('cacher')){
            $(this).removeClass('cacher');
        }
    });
});
