$(document).ready(function() {
	
	$("form#new-place").submit(function(event) {
		event.preventDefault();
		
		var inputtedPlaceName = $("input#new-place-name").val();
		var inputtedLandmark = $("input#new-landmark").val();
		var inputtedDate = $("input#new-date").val();
		var inputtedNotes = $("input#new-notes").val();
		
		
		var newPlace = {placeName: inputtedPlaceName, landmark: inputtedLandmark, date: inputtedDate, notes: inputtedNotes};
		console.log(newPlace);
		
		
		$("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");
		$("li .place").last().click(function() {
			alert("Hey there.");
			$("#show-place").show();
			
			$("#show-place h2").text(newPlace.placeName);
			$(".place").text(newPlace.placeName);
			$(".landmark").text(newPlace.landmark);
			$(".date").text(newPlace.date);
			$(".notes").text(newPlace.notes);
		});
		
		
		$("input#new-place-name").val("");
		$("input#new-landmark").val("");
		$("input#new-date").val("");
		$("input#new-notes").val("");
	});
});