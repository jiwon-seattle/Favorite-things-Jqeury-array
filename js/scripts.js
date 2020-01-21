$(document).ready(function(){
    $("#formOne").submit(function(event) {
        event.preventDefault();
        
        var form1 = $("#name").val();
        var form2 = $("#color").val();
        var form3 = $("#movie").val();
        var form4 = $("#food").val();
        var form5 = $("#number").val();

        var array = [form1, form2, form3, form4, form5]

        // $(#text).text(array).val();

        $("#text").append(array.toString());
        // $("#text").text(array.toString());
    });
});  