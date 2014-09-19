$(document).on('ready', function() {

	$(".formContainer").hide();

	// TOGGLE FORM //

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


	// On blur of a textarea...
	$(document).on("blur", "textarea", function() {
		// Save all value entries into their own variables. This must be done within this event!
		var nameEntry = $(".name").val();  
		var bioEntry = $(".bio").val(); 
		var booksEntry = $(".books").val();
		var jsEntry = $(".js_libraries").val();

		// Show each entry in its display field
		$(".name").closest(".container").find(".name").text(nameEntry);
		$(".bio").closest(".container").find(".bio").text(bioEntry);
		$(".books").closest(".container").find(".books").text(booksEntry);
		$(".js_libraries").closest(".container").find(".js_libraries").text(jsEntry);

	});



});