$(document).on('ready', function() {

	$(".formContainer").hide();

	// TOGGLE FORM //

			// On click of button with class "show", toggle the form (toggle = show/hide), replace text,
			// and add a class of "hide"
			$(document).on("click", ".show", function() {
				$(".formContainer").slideDown("slow");
				$(this).text("Hide Form").addClass("hide").removeClass("show");
			});

			// On click of an element with both "show" and "hide" classes, toggle the form again, 
			// then remove the "hide" class so that you can once again use the above 'hide' event handler
			$(document).on("click", ".hide", function() {
				$(".formContainer").slideUp("slow");
				$(this).text("Show Form").addClass("show").removeClass("hide");
			});

	// Generate the form dynamically when you click the Submit button...
	$(".submit").on("click", function(e){
		e.preventDefault();
		$(".box").each( function(){
			var textareaClass = $(this).find("textarea").attr("class").toUpperCase();
			var textareaEntry = $(this).find("textarea").val();
			$(".formContainer").slideUp("slow");
			$(this).closest("body").find(".display").append("<h2>" + textareaClass + "</h2><p>" + textareaEntry + "</p>");
		});

	});

});
