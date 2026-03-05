// // Задание 1

// function timer(seconds) {
//     let remaining = seconds;

//     function tick() {
//         console.log(`Осталось: ${remaining} сек`);
//         remaining--;

//         if (remaining >= 0) {
//             setTimeout(tick, 1000); 
//         } else {
//             console.log("Время вышло!");
//         }
//     }

//     tick(); 

// };

// timer(10);

// // Задание 2

// function timerWater () {
//     alert ('не забудь выпить воды');
// };

// setInterval (timerWater, 30 * 60 *1000);




//задание 3
const delayInput = document.getElementById('delayInput');
const textInput = document.getElementById('textInput');
const beggin = document.getElementById('beggin');

let intervalId = null;

beggin.addEventListener('click', function () {
    const delayText = delayInput.value;
    const message = textInput.value;

    if (delayText === '' || message === '') {
        alert ('Заполните все поля');
        return
    }

    const delayMilliseconds = delayText * 1000;

    function greet() {

        alert ('Задержка: ' + delayText + '\n' + 'Сообщение: ' + message);
    }

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {

        intervalId = setInterval(greet, delayMilliseconds);
    }

})



