var link = {
  color:function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var body = {
  backgroundColor:function (color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  color:function (color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

function themeChanger (self) {
  var target = document.querySelector('body');
  if (self.value === 'Dark') {
    body.backgroundColor('black');
    body.color('white');
    self.style.color = 'black';
    self.style.backgroundImage = 'linear-gradient(to bottom, white, #949494)';
    self.value = 'Light';

    link.color ('powderblue');
  } else {
    body.backgroundColor('white');
    body.color('black');
    self.style.color = 'white';
    self.style.backgroundImage = 'linear-gradient(to bottom, black, #484848)';
    self.value = 'Dark';

    link.color ('black');
  }
}
