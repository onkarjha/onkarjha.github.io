
         $(document).ready(function() {
            $('.count').counterUp({
                 delay: 10,
                 time: 1000
             });
            var d=26;
            var m=06;
            var y=2003;
            $(".my_dob").text(d+"/"+m+"/"+y);
         
            let currentDate = new Date();
         let dd = currentDate.getDate()
         let mm = currentDate.getMonth() + 1
         let yy = currentDate.getFullYear();$(".today_year").text(yy);
         if(mm>m){
         if(dd>d){
         $(".my_age").text((yy-y)+1);
         }else{
         $(".my_age").text((yy-y));
         }
         }else{
         $(".my_age").text((yy-y));
         }
         $(".cat p").click(function() {
            var cat=$(this).attr("data-item");
            console.log(cat);
            $(".cat p").removeClass("cat_act");$(this).addClass("cat_act");
            $(".card").hide(100);
            $("."+cat).show(100);
         });
         $(".send_mail").click(function(e) {
            e.preventDefault();
            var a=$(".f_name").val();
            var b=$(".l_name").val();
            var c=$(".email").val();
            var d=$(".phone_number").val();
            var e=$(".mess_").val();
            
             function isValidEmail(email) {
         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
      }
            if (a !== undefined && a !== "" && 
         c !== undefined && c !== "" && isValidEmail(c) &&
         d !== undefined && d !== "" && !isNaN(d) &&
         e !== undefined && e !== "" && a !== undefined && a !== ""
      ){
               console.log(a,b,c,d,e);
         }else{
            alert("Please fill all the details properly!");
         }
         });$(".hum,.navi li a").click(function() {
         $(".mob_navigation").slideToggle(100);
         });
         });