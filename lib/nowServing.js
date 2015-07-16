'use strict';

var nowServing = function(line){
  var message;
  if (line.length === 0) { message = "There is nobody waiting to be served!"}
  else {
    message = "Currently serving " + line[0] + ".";
  }
  console.log(message);
  line.shift();
};
