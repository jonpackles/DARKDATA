$( document ).ready(function() {
    console.log( "ready!" );


	$('#eye').click(function(){
		console.log("you clicked the eye");
		$('#trackerP').slideToggle('fast');
	});
});



