$(document).ready(function(){
		//change of color of even spans
	$("span:even").css('color','red')

		// new button to every paragraph
	$("p").each(function(index, element){
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		$(element).append(button);

		//pop up window on click on the button
		$("button").click(function(){
			alert($(this).attr("data-tmp"));
		})
	})	
});