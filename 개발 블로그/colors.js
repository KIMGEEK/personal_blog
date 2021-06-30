var link = {
    setColor: function (color) {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //       alist[i].style.color = color;
    //       i = i + 1;
    //   }
    $('a').css('color', color);
    }
  }

  var body = {
    setColor:function (color) {
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor:function (color) {
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }
  function darkModeButton(self){
    if(self.value == 'dark'){
      var target = document.querySelector('body');
      body.setBackgroundColor('black');
      body.setColor('white');
      link.setColor('powderblue');
      self.value = 'light';
    } else {
      var target = document.querySelector('body');
    body.setBackgroundColor('white');
    body.setColor('black');
    link.setColor('orange');
    self.value = 'dark';
    }
  }