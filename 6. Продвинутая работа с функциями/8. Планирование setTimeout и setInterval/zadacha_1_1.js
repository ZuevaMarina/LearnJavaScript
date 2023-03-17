function printNumbers(from, to) {
    let start = from;
  
    let timer = setInterval(function() {
      console.log(start);
      if (start == to) {
        clearInterval(timer);
      }
      start++;
    }, 500);
  }
  
console.log(printNumbers(7, 14));