var counter = 0;

function changeBackG() {
  var images = [
        'url(../Background images/1.jpg)',
        'url(../Background images/2.jpg)',
        'url(../Background images/3.jpg)',
        'url(../Background images/4.jpg)',
        'url(../Background images/5.jpg)',
        'url(../Background images/6.jpg)',
        'url(../Background images/7.jpg)',
        'url(../Background images/8.jpg)'
      ];

  if (counter == images.length) {
    counter = 0;
  }
  document.body.style.backgroundImage = images[counter];

  counter++;
}

setInterval(changeBackG, 10000);
