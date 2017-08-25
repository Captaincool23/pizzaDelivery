function Pizza(size, toppings1,toppings2,toppings3,toppings4){
  this.size = size;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
  this.toppings4 = toppings4;
};

  Pizza.prototype.price = function(){
    var total = this.toppings1 + this.toppings2 + this.toppings3 + this.toppings4 + this.size;
    return total;
  }
$(document).ready(function(){
  $("#pizzaOrder").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#size").val());
    console.log(size);
    var toppings1 = parseInt($("#toppings1").val());
    console.log(toppings1);
    var toppings2 = parseFloat($("#toppings2").val());
    console.log(toppings2);
    var toppings3 = parseFloat($("#toppings3").val());
    console.log(toppings3);
    var toppings4 = parseFloat($("#toppings4").val());
    console.log(toppings4);
    var userPizza = new Pizza(size, toppings1,toppings2,toppings3,toppings4);
    console.log(userPizza.price());
    $("#customerOrder").show();
    $("ul").append("<li>" + userPizza.price() + "</li>")
    $("li").remove();
    $("ul").append("<li>" + userPizza.price() + "</li>")
    });
  });
