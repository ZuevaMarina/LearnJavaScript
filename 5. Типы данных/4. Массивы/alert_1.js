function sumInput() {
    let arr = [];
  
    while (true) {
      let number = prompt('введите число: ', '');
      if (number === null || number === '' || isNaN(number)) break;
      arr.push(Number(number));
    }
    
    let sum = 0;
    for (const item of arr) {
      sum += item;
    }
    
    return sum;
  }
  
  alert(sumInput());