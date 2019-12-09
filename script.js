/* My attempt at the images change when an item is hovered over

$("#title").mouseover(function(){

var images= [
  'b1.jpg',
  'b2.jpg',
  'b3.jpg',
];

var img = document.querySelector('#row1');
var index = 0;
var iterations = 0;

var updateImage = function() {
  if (index >= images.length) {
    index = 0;
    iterations++;
  }
  img.style.backgroundImage = 'url(' + images[index] + ')';
  $(this).fadeIn("slow");
  if (iterations >= 2) {
    clearInterval(interval);
  } else {
    index++;
  }
}

updateImage();

var interval = setInterval(updateImage, 3000);

});

*/
