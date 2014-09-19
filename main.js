$(document).on('ready', function() {

	$(".formContainer").hide();

	// On click of button with class "show", toggle the form (toggle = show/hide), replace text,
	// and add a class of "hide"
	$(document).on("click", ".show", function() {

		$(".formContainer").toggle();
		$(this).text("Hide Form").addClass("hide").removeClass("show");

	});

	// On click of an element with both "show" and "hide" classes, toggle the form again, 
	// then remove the "hide" class so that you can once again use the above 'hide' event handler
	$(document).on("click", ".hide", function() {

		$(".formContainer").toggle();
		$(this).text("Show Form").addClass("show").removeClass("hide");
	});



	// On click of a textarea...
	$(document).on("click", "textarea", function() {
		$(this).focus();  // Auto-focus the textarea
	});

	// On blur of a textarea...
	$(document).on("blur", "textarea", function() {
		$(this).show();   /* When blurred, show user what they entered */
	});

	// On click of submit button
	$(document).on("click", ".submit", function() {
		// On submit, save all value entries into their own variables. This must be donw within this event!
		var nameEntry = $(".name").val();  
		var bioEntry = $(".bio").val(); 
		var booksEntry = $(".books").val();
		var jsEntry = $(".js_libraries").val();

		$(".submit").closest(".formContainer").hide();

		/* Take each entry and put it into the corresponding class location */
		$(".name").replaceWith(nameEntry);
		$(".bio").replaceWith(bioEntry);
		$(".books").replaceWith(booksEntry);
		$(".js_libraries").replaceWith(jsEntry);
	});


});