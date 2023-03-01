let x = prompt('Введите натуральное число');
let n = prompt('Введите натуральную степень, в которую необходимо возвести число');

function pow() {
let result = x ** n;

if (n % 1 !== 0) { 
    alert('Это не натуральное число!'); 
} else {
    alert(`Итог возведения в степень: ${result}`)
}

return result;

}

pow();