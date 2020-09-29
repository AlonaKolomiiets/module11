// Есть массив цветов в hex-формате
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//и кнопки Start и Stop.
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
const selectors = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop,
// изменение цвета фона должно останавливаться.

const dynamicColor = {
  intervalId: null,
  onStart() {
    this.intervalId = setInterval(() => {
      selectors.body.style.background =
        colors[this.randomIntegerFromInterval(0, colors.length)];
      selectors.btnStart.setAttribute('disabled', true);
    }, 1000);
  },

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  onStop() {
    clearInterval(this.intervalId);
    selectors.body.style.background = 'white';
    selectors.btnStart.removeAttribute('disabled');
    this.intervalId = null;
  },
};

selectors.btnStart.addEventListener(
  'click',
  dynamicColor.onStart.bind(dynamicColor),
);

selectors.btnStop.addEventListener(
  'click',
  dynamicColor.onStop.bind(dynamicColor),
);

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока
// изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию r
// andomIntegerFromInterval.
