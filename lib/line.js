'use strict';

var line = function(line) {
  var message = "The line is currently"
  if (line.length === 0) { message += " empty."}
  else {
    message += ":"
    line.forEach(function(name, index) {
      message += " " + (index + 1) + ". " + name;
      if (index < (line.length - 1)) {
        message += ","
      }
    });
  }
  console.log(message);
};

