
(function() {
	
$.ajax({
    url: "currency.json",
    dataType: "json",
    success: function(data) {
        console.log(data);
    }
});	

$.getJSON( "currency.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    //items.push( "<li id='" + key + "'>" + val + "</li>" );
	console.log(data)
  });
 
});
	
function Conversion() 
{
  var val = parseInt(document.getElementById ("value").value);
  var madeSelection =  parseInt(document.getElementById ("Selection").value);
  
   

  switch(madeSelection)
  {
    case 1:
       var converted =  val * 0.37; //EC to US
       break;
    case 2:
       var converted =  val * 0.30; //EC to EUR
       break;
    case 3:
       var converted =  val * 2.70; //US to EC
       break;
     //ETC....
    default:
       alert('You chose wrong option'); // if user chose wrong option, send him message
       break;           
  } 

  document.getElementById ("conversion").value = converted;
  return false; //prevent for submit form
}
    
})();
