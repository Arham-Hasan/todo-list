//check off pressing X
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(300, function() {
	 $(this).remove(); });
	event.stopPropagation();
})
//checing off todo
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

//new todo
$("input").keypress(function(event){
     if(event.which === 13){
     	var newtodo = $(this).val();
     	$(this).val("");
     	if (newtodo.length !=0 ) {
     		$("ul").append("<li><span>X</span> " + newtodo + "</li>");}
     }
})

//check off pressing X
$("#clear").on("click",function(){
	$("li").fadeOut(300, function() {
	 $("li").remove(); });
})