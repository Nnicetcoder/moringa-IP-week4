$("#submit_btn").click(function(){
	alert("Thank you for reaching to us")
});
var price,toppings_price,crust_price,size_price,total;

function findPizza(crust,size,toppings,total){
	this.crust=crust;
	this.size=size;
	this.toppings=toppings;
	this.total=total;

$(document).ready(function(event){
	var pSize=$("#size option:selected").val();
	var pToppings=$("#toppings option:selected").val();
	var pCrust=$("#crust option:selected").val();

	crust_price=parseInt(pCrust);
	size_price= parseInt(pSize);
	toppings_price=parseInt(pToppings);

	total= crust_price + size_price+ toppings_price;


});