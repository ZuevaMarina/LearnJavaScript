function printNumbers(from, to) {
    let start = from;
    
    setTimeout(function go() {
        console.log(start);
        if (start < to) {
          setTimeout(go, 1000);
        }
        start++;
    }, 500);
}
  
console.log(printNumbers(7, 14));