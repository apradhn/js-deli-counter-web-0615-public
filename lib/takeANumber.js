'use strict';

var takeANumber = function(line, name){
  var message;
  line.push(name);
  message = "Welcome, " + name + ". You are number " + (line.length) + " in line.";
  console.log(message);
}
