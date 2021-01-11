function sendMessage(){
	alert("Thank you for reaching out to us !!!");
};
function sendComment(){
	 alert("Thank you for your comment!!");
};
function hideComment(){
	$("#comment-h4").hide();
	$("#comment").hide();
	$("#cancel").hide();
	$("#comment-text").hide();
}
var price,toppings_price,crust_price,size_price,number,total;

function findPizza(crust,size,toppings,total){
	this.crust=crust;
	this.size=size;
	this.toppings=toppings;
	this.total=total;
}

function getTotal(){
	var pSize=$("#size").val();
	var pToppings=$("#toppings").val();
	var pCrust=$("#crust").val();
	var pNumber=$("#number").val();

	crust_price=parseInt(pCrust);
	size_price= parseInt(pSize);
	toppings_price=parseInt(pToppings);
	number=parseInt(pNumber);

	total= crust_price + size_price+ toppings_price;
	total*=number;

	var delivery=$("input[name=radio]:checked").val();

	switch(delivery){
		case "yes":
			price=total + 2000;
			prompt("Where do you want your pizza to be delivered?");
			prompt("enter phone number we will notify about the delivery?");
			alert("The total price is: "+price+" RWF");
			alert("Your order will be delivered to the specified location");
			alert("Thank you for choosing PIZZAforLIFE!!")
			break;
		case "no":
			price=total ;
			alert("Your pizza will not be delivered")
			alert("The total price is: "+ price +" RWF");
			alert("Thank you for choosing us!!")
			break;
		default:
		alert("you need to choose whether or not it will be delivered" );
	}
   
	

};
function checkOut(){
	var pSize=$("#size").val();
	var pToppings=$("#toppings").val();
	var pCrust=$("#crust").val();
	

	crust_price=parseInt(pCrust);
	size_price= parseInt(pSize);
	toppings_price=parseInt(pToppings);
	
   	var msg="the size costs "+ size_price+" RWF\n";
   	    
   		msg+= "the crust costs "+crust_price+" RWF\n";
   		
   		msg+=  "the toppings costs "+toppings_price+" RWF\n";
   		
   		msg+=  "the delivery costs "+2000+"RWF"+"(in case it will be made)";
   		alert(msg);
   };