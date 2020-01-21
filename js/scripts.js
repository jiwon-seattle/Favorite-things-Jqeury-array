$(document).ready(function(){
    $("#formOne").submit(function(event) {
        event.preventDefault();
        
        var form1 = $("#name").val();
        var form2 = $("#color").val();
        var form3 = $("#movie").val();
        var form4 = $("#food").val();
        var form5 = $("#number").val();

        var array = [form1, form2, form3, form4, form5]
        
        var arraynew = []
    
       arraynew.push(array[0], array[1], array[2])

        // $(#text).text(array).val();

        // $("#text").append(arraynew.toString());
        // $("#text").text(array.toString());
        $("#list").show();
        $("#el1").text(arraynew[0].toString());
        $("#el2").text(arraynew[1].toString());
        $("#el3").text(arraynew[2].toString());
    });
});  