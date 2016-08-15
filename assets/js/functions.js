$( document ).ready(function() {
  smoothlyScroll(800);

	$(".navToggle").click (function(){
	  $(this).toggleClass("open");
	  $("nav").toggleClass("open");
	});

	$(window).scroll(function() {
    if($(this).scrollTop() >100) {
        $('.nav-container').addClass('scroller');
    } else {
        $('.nav-container').removeClass('scroller');
    }
	});

	validateForm();
});


// Smooth scroll for the fun people

function smoothlyScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}


// Validates contact form
function validateForm() {

  $("#contact-form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/kodyroth@gmail.com", 
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          _replyto: $(form).find("input[name='_replyto']").val(),
          message: $(form).find("textarea[name='message']").val()
        },
        dataType: "json",
        success: function() {
          $("#submit-success").fadeIn();
          $("#contact-form").fadeOut();
        },
        error: function() {
          $("#submit-errors").fadeIn();        
        }
      });
    }
  });
}