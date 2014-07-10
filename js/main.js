var s = Snap("#svg");

// // Circle with 80px radius
// var circle = s.circle(90,120,80);
// // Square with 160px one side
// var square = s.rect(210,40,160,160);
// // Ellipse with 80px vertical radius and 50px horizontal radius
// var ellipse = s.ellipse(460,120,50,80);

// circle.attr({
//   fill: 'coral',
//   stroke: 'coral',
//   strokeOpacity: .3,
//   strokeWidth: 10
// });

// square.attr({
//   fill: 'lightblue',
//   stroke: 'lightblue',
//   strokeOpacity: .3,
//   strokeWidth: 10
// });

// ellipse.attr({
//   fill: 'mediumturquoise',
//   stroke: 'mediumturquoise',
//   strokeOpacity: .2,
//   strokeWidth: 10
// });



// var circle_3 = s.circle(240, 240, 200);

// var circle_1 = s.circle(200, 200, 140);
// var circle_2 = s.circle(280, 200, 140);
// var circle_3 = s.circle(280, 200, 140);
// var circles = s.group(circle_1, circle_2);
// circle_3.attr({
//   fill: 'green',
//   fillOpacity: 1,
//   mask: circles
// })

// circles.attr({
//   fill: 'red',
//   fillOpacity: .5
// });


var circle_1 = s.circle(300, 200, 140);
var circle_2 = s.circle(250, 200, 140);

// Group circles together

var circles = s.group(circle_1, circle_2);

var ellipse = s.ellipse(275, 220, 170, 90);

// Add fill color and opacity to circle and apply
// the mask
circles.attr({
  fill: 'coral',
  fillOpacity: .6,
  mask: ellipse
});

ellipse.attr({
  fill: '#fff',
  opacity: .8
});

// Create a blink effect by modifying the rx value
// for ellipse from 90px to 1px and backwards

function blink(){
  ellipse.animate({ry:1}, 220, function(){
    ellipse.animate({ry: 90}, 300);
  });
};

// Recall blink method once every 3 seconds

setInterval(blink, 3000);

// circle_1.attr({
//   fillOpacity: .2
// });
// circle_2.attr({
//   fillOpacity: .2
// });