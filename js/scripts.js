$("#submit_btn").addEventListener("click",function(){
	alert("Thank you for reaching to us")
});
$("#button-order").addEventListener("click",function(){
	var number;toppings;size;crust;total;

	crust=document.getElementById("crust").value;
	size=document.getElementById("size").value;
	toppings=document.getElementById("toppings").value;
	number=document.getElementById("number").value;

	total=parseInt(crust)+parseInt(size)+parseInt(toppings) ;
	total*=parseInt(number);
	alert(total);

});