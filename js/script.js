function newMovie1()  {
    window.location.href = 'movie1.html';
  }

  function newMovie1_02(){
    window.location.href = 'movie1_02.html';
  }

  function newMovie1_03(){
    window.location.href = 'movie1_03.html'
  }

  function newMovie1_04(){
    window.location.href = 'movie1_04.html'
  }
  
  function newMovie2_01(){
    window.location.href = 'movie2_01.html'
  }

  function newMovie2_02(){
    window.location.href = 'movie2_02.html'
  }

  function newMovie2_03(){
    window.location.href = 'movie2_03.html'
  }

  function newMovie2_04(){
    window.location.href = 'movie2_04.html'
  }

  function newMovie3_01()  {
    window.location.href = 'movie3_01.html';
  }
  function newMovie3_02()  {
    window.location.href = 'movie3_02.html';
  }
  function newMovie3_03()  {
    window.location.href = 'movie3_03.html';
  }
  function newMovie3_04()  {
    window.location.href = 'movie3_04.html';
  }

  function newMovie4_01(){
    window.location.href = 'movie4_01.html'
  }

  function newMovie4_02(){
    window.location.href = 'movie4_02.html'
  }
  function newMovie4_03(){
    window.location.href = 'movie4_03.html'
  }
  function newMovie4_04(){
    window.location.href = 'movie4_04.html'
  }

  var imgCnt=$(".movebox img").length;// img의 전체 개수를 알수 있다.
  var imgWidth=$(".showbox").outerWidth();// 쇼박스의 크기
  var maxLeft = (imgCnt*imgWidth*-1)+imgWidth;

  setInterval(function(){
          if( parseInt($(".movebox").css("left")) == maxLeft){
              $(".movebox").animate({
                  left:"0px"
              },500);    
          }else{
              $(".movebox").animate({
                  left:"-=230px"
              },1000);
          }
      },1500);// 1000은 클릭하는 주기. 1초 - 1초 마다 한번씩 눌러라.

    /*  setInterval(function(){                
        $(".showbox2").children(".movebox2").animate({top:"-33px"},1000,function(){
            var x=$(".showbox2").children(".movebox2").children("div").eq(0).detach();
            $(".showbox2").children(".movebox2").append(x);
            $(".showbox2").children(".movebox2").css("top","0");
        });                
    }, 2000);*/
  

    setInterval(function(){                
      $(".showbox2").eq(0).children(".movebox2").animate({top:"-33px"},700,function(){
          var x=$(".showbox2").eq(0).children(".movebox2").children("div").eq(0).detach();
          $(".showbox2").eq(0).children(".movebox2").append(x);
          $(".showbox2").eq(0).children(".movebox2").css("top","0");
      });                
  }, 2000);

  setInterval(function(){                
    $(".showbox2").eq(1).children(".movebox2").animate({top:"-33px"},700,function(){
        var x=$(".showbox2").eq(1).children(".movebox2").children("div").eq(0).detach();
        $(".showbox2").eq(1).children(".movebox2").append(x);
        $(".showbox2").eq(1).children(".movebox2").css("top","0");
    });                
}, 2000);

setInterval(function(){                
  $(".showbox2").eq(2).children(".movebox2").animate({top:"-33px"},700,function(){
      var x=$(".showbox2").eq(2).children(".movebox2").children("div").eq(0).detach();
      $(".showbox2").eq(2).children(".movebox2").append(x);
      $(".showbox2").eq(2).children(".movebox2").css("top","0");
  });                
}, 2000);

setInterval(function(){                
  $(".showbox2").eq(3).children(".movebox2").animate({top:"-33px"},700,function(){
      var x=$(".showbox2").eq(3).children(".movebox2").children("div").eq(0).detach();
      $(".showbox2").eq(3).children(".movebox2").append(x);
      $(".showbox2").eq(3).children(".movebox2").css("top","0");
  });                
}, 2000);