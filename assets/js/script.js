let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("MySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
 
function quickbox(){
  if ($(window).width() > 767) {
   $('.quickview-button').magnificPopup({
   type:'iframe',
   delegate: 'a',
   preloader: true,
   tLoading: 'Loading image #%curr%...',
   });    
  }  
}
jQuery(document).ready(function() {quickbox();});
jQuery(window).resize(function() {quickbox();});
$('input[name=\'search\']').autocomplete({
 'source': function(request, response) {
   $.ajax({
     url: 'index.php?route=product/search/autocomplete&filter_name=' +  encodeURIComponent(request),
     dataType: 'json',
     success: function(result) {
       var products = result.products;
       $('.ajaxishi-search ul li').remove();
         $.each(products, function(index,product) {
         var html = '<li>';
           html += '<div>';
           html += '<a href="' + product.url + '" title="' + product.name + '">';
           html += '<div class="product-image"><img alt="' + product.name + '" src="' + product.image + '"></div>';
           html += '<div class="product-desc">';
           html += '<div class="product-name">' + product.name + '</div>';
           if (product.special) {
                           html += '<div class="product-price"><span class="special">' + product.price + '</span><span class="price">' + product.special + '</span></div>';
                       } else {
                           html += '<div class="product-price"><span class="price">' + product.price + '</span></div>';
           }
           html += '</div>';
           html += '</a>';
           html += '</div>';
           html += '</li>';
           $('.ajaxishi-search ul').append(html);
         });
         $('.ajaxishi-search').css('display','block');
               return false;
     }
   });
 },
 'select': function(product) {
   $('input[name=\'filter_name\']').val(product.name);
 }
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})




