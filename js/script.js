$(document).ready(function() {
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });
var d = 26;
var m = 6;
var y = 2003;

$(".my_dob").text(d + "/" + m + "/" + y);

let currentDate = new Date();
let dd = currentDate.getDate();
let mm = currentDate.getMonth() + 1;
let yy = currentDate.getFullYear();

console.log("Current Date:", dd + "/" + mm + "/" + yy); // Debug log

$(".today_year").text(yy);

if (mm > m || (mm === m && dd >= d)) {
  $(".my_age").text(yy - y);
} else {
  $(".my_age").text(yy - y - 1);
}


  $(".cat p").click(function() {
    var cat = $(this).attr("data-item");
    console.log(cat);
    $(".cat p").removeClass("cat_act");
    $(this).addClass("cat_act");
    $(".card").hide(100);
    $("." + cat).show(100);
  });
  $(".send_mail").click(function(e) {
    e.preventDefault();
    var a = $(".f_name").val();
    var b = $(".l_name").val();
    var c = $(".email").val();
    var d = $(".phone_number").val();
    var e = $(".mess_").val();
    let currentDate = new Date();
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (a !== undefined && a !== "" && c !== undefined && c !== "" && isValidEmail(c) && d !== undefined && d !== "" && !isNaN(d) && e !== undefined && e !== "" && a !== undefined && a !== "") {
      //https://script.google.com/macros/s/AKfycbypfKxF3GCurfbI79HM07pEFtkVGPhEBrLmYUVnBeefcSsJ5vcww0NZnEpHQBgHvA0A1w/exec
      $.post("https://script.google.com/macros/s/AKfycbxNiHIwULlQGcdoLZYPGRMHDadL3VxQ5xOFjtz7UTGtmgM7S1lQiAjcOqGlaxe3NazPnA/exec",{first:a,last:b,phone:c,email:d,message:e,date:currentDate},function(res){
          if(res==1){
            alert("We received your message! We will reply you as soon as possible!");
          }else{
            alert("Error Occured!");
          }
      });
    } else {
      alert("Please fill all the details properly!");
    }
  });
  $(".hum,.navi li a").click(function() {
    $(".mob_navigation").slideToggle(100);
  });
});
