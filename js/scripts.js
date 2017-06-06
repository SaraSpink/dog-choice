$(document).ready(function() {
  $("form#information").submit(function(event) {
    var age = parseInt($("input#age").val());
    var allergies = $("select#allergies").val();
    var activity = $("select#activity").val();

    if(age < 18 && allergies ==='yes' && activity === high) {
      ("#Doodle").show;
      ("#pug").hide;
      ("#lab").hide;
    } if else {
      (age >= 18 && allergies ==='no' && activity === high) {
      ("#lab").show;
      ("#Doodle").hide;
      ("#pug").hide;
    } else {
      (age >= 1 && allergies ==='no' && activity === low) {
      ("#pug").show;
      ("#lab").hide;
      ("#Doodle").hide;
    }

    event.preventDefault();
  });
});
