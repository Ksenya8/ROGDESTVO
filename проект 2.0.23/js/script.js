//создаём крутящуюся метелей
let boxshadow = '';
for (let i = 0; i < 2000; i++) {
    px = (Math.random() < 0.5) ? '-' : '';
    py = (Math.random() < 0.5) ? "-" : " ";
    x = Math.floor((Math.random() * window.innerWidth) + 1);
    y = Math.floor((Math.random() * window.innerHeight) + 1);
    s = Math.floor((Math.random() * 2) - 1);
    boxshadow += px + x + "px"
        + py + y + " px 0" + s + " px #fff,";
}
boxshadow = boxshadow.slice(0, -1);
stars.style.boxShadow = boxshadow;
//================================================
let priz = document.querySelector(`#container div:last-child`)
let boxPriz = document.querySelectorAll('#container div img')
for (let i = 0; i < boxPriz.length; i++) {
    console.log(boxPriz[i].src)
    boxPriz[i].onclick = function () {
        priz.style.fontSize = `16px`;
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0.jpg')
            priz.innerHTML = `Пусть новый год принесет с собой только приятные и радостные хлопоты,<br>
    пусть он будет наполнен чудесными мгновениями,
    долгожданными событиями и яркими,
     фееричными впечатлениями!`;

        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C.jpg')
            priz.innerHTML = `Приближается новый год — время чудес и исполнения заветных желаний
    Желаю тебе встретить его в прекрасном настроении,
    преисполнившись энергией и оптимизмом,
    провести максимально результативно
    добиться всего, о чем мечтаешь, и даже больше!`;

        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BB%D0%B5%D0%BE%D0%BF%D0%B0%D1%80%D0%B4.jpg')
            priz.innerHTML = `Поздравляю с Новым годом! Пусть этот год будет ещё лучше и красочнее предыдущего,
    чтобы случалось и запомнилось только хорошее.
    Желаю быть счастливым человеком во всех сферах!`;

        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%B1%D1%83%D1%80%D1%83%D0%BD%D0%B4%D1%83%D0%BA.jpeg')
            priz.innerHTML = `Пусть все, что радует и греет
Перенесется в Новый год,
И ветер перемен навеет
Судьбы счастливый поворот.
Так с Новым Годом! С Новым Счастьем!
Пусть будут с Вами навсегда
Любовь родных, друзей участье
И мир на долгие года!`;

        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%B1%D0%B5%D0%BB%D0%BA%D0%B0.jpg')
            priz.innerHTML = `С Новым Годом поздравляю,
Пусть же все, о чем мечтаешь,
То, что будет столь желанным,
В этот год к тебе придет.
Да, еще тебе желаю,
Даже то, чего не ждешь…
Лишь бы добрым и приятным
Для тебя был этот год.`;
    }
}