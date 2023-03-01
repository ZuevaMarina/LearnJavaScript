let login = prompt('Введите ваш логин', '');

    if (login === 'Админ') {

      let pass = prompt('Пароль?', '');
    
      if (pass === 'Я Главный') {
        alert( 'Здравствуйте!' );
      } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
      } else {
        alert( 'Неверный пароль' );
      }
    
    } else if (login === '' || login === null) {
      alert( 'Отменено' );
    } else {
      alert( "Я вас не знаю" );
    }