

function red(){
   document.querySelector("#section1").style.background = "red";
}
function img123(){
   document.querySelector("#imgTag").src = "image/food2.jpg";
}
function img122(){
   document.querySelector("#imgTag").src = "image/food1.jpg";
}
function img121(){
   document.querySelector("#imgTag").src = "image/food2.jpg";
}
function blue(){
   document.querySelector("#section1").style.background = "blue";
}
function green(){
   document.querySelector("#section1").style.background = "green";
}



function popup(){
   document.querySelector("#popup").classList.add("active");
}

function popup2(){
   document.querySelector("#popup").classList.remove("active");
}


var typed = new Typed('.type', {
   strings: ['This is a JavaScript library', 'This is an ES6 module'],
   smartBackspace: true, // Default value
   loop: true,
   typeSpeed: 20,
   backSpeed: 20,
   backDelay: 500,
 });

 ////// 
 
// var input = document.querySelector("#input");
// var btn = document.querySelector(".btn");
// var h3 = document.querySelector(".gap");

// btn.addEventListener("click", valueChanger);

// function valueChanger(){
//    var content = input.value;

//    if( content === ""){
//       alert("Please fill up the form");
//    }
//    else{
//       h3.innerHTML = content;
//       input.value = "";
//    }
// }

// var bg = document.querySelector(".colorChange");
// var span = document.querySelector(".hashbook");
// var btn = document.querySelector(".btn");
// var color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

// btn.addEventListener("click", clickFunc);

// function clickFunc(){
//   var hash = "#";
//   for(x=0; x<6; x++){
//    var ramdom = Math.floor(Math.random()*color.length);
//    hash += color[ramdom];
//   }
//   bg.style.background = hash;
//   span.innerHTML = hash;
// }

//show password and hide

// var input = document.querySelector("#input2");
// var msgOut = document.querySelector(".gap");
// var check = document.querySelector("#check");

// check.addEventListener("click", valuable);

// function valuable(){
//   if(input.type =="password"){
//    input.type = "text";
//   }else{
//    input.type = "password";
//   }
// }

// var box = document.querySelector(".colors .inbox");
// var msg = document.querySelector("label");

// window.addEventListener("mousemove", function(e){
//    var x = e.clientX;
//    var y =  e.clientY;
   
//    msg.style.top =  (y + 10) + "px";
//    msg.style.left = (x + 10) + "px";

// });

// var scrolltop = document.querySelector(".scrollbar .fa-arrow-up");

// window.addEventListener("scroll", function(){
//    scrolltop.classList.toggle("active", window.scrollY > 100);
// });


// scrolltop.addEventListener("click", function(){
//    window.scrollTo({
//       top: 0,
//       behavior : "smooth",
//    })
// });


 
//

var input = document.querySelector(".ranger .rangeValue");
var slider = document.querySelector(".ranger .dragable");
var img = document.querySelector(".images .img-2");

input.addEventListener("input", () => {
  var slide = input.value;
  
  slider.style.left = slide + "%";
  img.style.width = slide + "%";
});