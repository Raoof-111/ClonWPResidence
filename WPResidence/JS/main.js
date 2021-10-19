$(document).ready(function(){
$("#dp-first").mouseenter(function(){
    $(".dpcontent").css("display","block");
});
$("#dp-first").mouseleave(function(){
    $(".dpcontent").css("display","none")
});

$("#demos").mouseenter(function(){
    $(".dp-second").css("display","block")
});
$("#demos").mouseleave(function(){
    $(".dp-second").css("display","none")
});



});


AOS.init();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "200px";
    document.getElementById("bars").style.display = "none";
    document.getElementById("arrow").style.display= "block"

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft= "0";
    document.getElementById("arrow").style.display= "none"
    document.getElementById("bars").style.display = "block";

  }



  function openNavuser(){
      document.getElementById("Sidenav").style.width ="250px";
      document.getElementById("body").style.marginRight= "220px";
      document.getElementById("Sidenav").style.display= "block"
  }
  function closeNavuser(){
      document.getElementById("Sidenav").style.width= "0";
      document.getElementById("body").style.marginRight= "0";
      document.getElementById("Sidenav").style.display= "none"

  }
  

  $(document).ready(function(){
      $(".cvn").click(function(){
          $(".panel").slideToggle(1000)
      })
  })


  $(document).ready(function(){
    $(window).scroll(function(){
        if(
            $(window).scrollTop() > 40 ){
                $('#header').css("margin-top","-3rem");
                $('#header').css("background-color","#113256");

            }
            else{
                $('#header').css('margin-top','1px');
                $('#header').css("background-color","transparent");

            }
        
    });
  });
  
 



$(document).ready(function(){
    $(".exit").click(function(){
        $(".fixed").css("display","none")
    })
})

$(document).ready(function(){
    $('.your-class').slick({

        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]



    });
  });

  function openTab(evt,tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');

    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display='none';
        
    }

    tablinks = document.getElementsByClassName('tablinks');
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";


}