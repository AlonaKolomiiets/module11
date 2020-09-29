// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
// определенной даты.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в
// формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

/* <div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div> */
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    setInterval(this.timer.bind(this), 1000);
  }

  time() {
    return this.targetDate.getTime() - Date.now();
  }
  daysCount() {
    const time = this.time();
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  hoursCount() {
    const time = this.time();
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  minsCount() {
    const time = this.time();
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }
  secsCount() {
    const time = this.time();
    return Math.floor((time % (1000 * 60)) / 1000);
  }
  timer() {
    const divCover = document.querySelector(`${this.selector}`);
    const spanDay = divCover.querySelector('span[data-value="days"]');
    const spanHours = divCover.querySelector('span[data-value="hours"]');
    const spanMins = divCover.querySelector('span[data-value="mins"]');
    const spanSecs = divCover.querySelector('span[data-value="secs"]');
    spanDay.textContent = this.daysCount().toString().padStart(2, '0');
    spanHours.textContent = this.hoursCount().toString().padStart(2, '0');
    spanMins.textContent = this.minsCount().toString().padStart(2, '0');
    spanSecs.textContent = this.secsCount().toString().padStart(2, '0');
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 31, 2021'),
});

// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate
// и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
