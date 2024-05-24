  window.onscroll = function (){
      var nav = document.getElementById("nav");
    var distance = document.documentElement.scrollTop;
    if(distance >=400){
      nav.classList.add('scroll');
    }else{
      nav.classList.remove('scroll');
    }

    }


    document.querySelector('#but1').addEventListener('click',function () {
      var name = document.getElementById('inp1').value;
      var email = document.getElementById('inp2').value;
    });

