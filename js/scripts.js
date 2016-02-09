$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var timestartInput = $("input#timestart").val();
    var timeendInput = $("input#timeend").val();
    var reasonInput = $("textarea#reason").val();


    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".timestart").text(timestartInput);
    $(".timeend").text(timeendInput);
    $(".reason").text(reasonInput);


    $("#confirm").show();
    $("body").removeClass();
    $("#confirm").addClass("green-background")
    event.preventDefault();
  });
})
