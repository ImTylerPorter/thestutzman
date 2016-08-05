$( document ).ready(function() {

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

// Validates contact form
function validateForm() {

  $("#contact-form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/hello@cleverladder.com", 
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