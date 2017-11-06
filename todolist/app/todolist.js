//check off todos
// $("li").on("click", function(){
// 	// e.stopPropagation();
// 	$(this).toggleClass("complete");
// })

// $("input[type='checkbox']").on("click", function(){
// 	// e.stopPropagation();
// 	$(this).parent().toggleClass("complete");

// })


$("ul").on("click","input[type='checkbox']", function(){
	// e.stopPropagation();
	$(this).parent().toggleClass("complete");
})


//remove todo
$("ul").on("click","span", function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
})

//add new todos


$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var textInput = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash'></i></span><input type=checkbox> "+ textInput + "</li>");
		$("input[type='text']").val("");
	}
})

// toggle input
$(".fa-pencil").on("click", function(){
	$("input[type='text']").fadeToggle()
})

// $("li").on("click", function(){
// 	alert("span clicked");
// })
// $("input").attr("type", "checkbox");

//<span>x</span>