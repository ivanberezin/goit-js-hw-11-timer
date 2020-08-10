"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  start() {
    const tiktak = setInterval(() => {
      let time = this.targetDate - Date.now();

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      const dataDays = this.selector.querySelector('[data-value="days"]');
      const dataHours = this.selector.querySelector('[data-value="hours"]');
      const dataMins = this.selector.querySelector('[data-value="mins"]');
      const dataSecs = this.selector.querySelector('[data-value="secs"]');

      dataDays.textContent = `${days}`.padStart(2, "0");
      dataHours.textContent = `${hours}`.padStart(2, "0");
      dataMins.textContent = `${mins}`.padStart(2, "0");
      dataSecs.textContent = `${secs}`.padStart(2, "0");

      if (time <= 0) {
        clearInterval(tiktak);
        dataDays.textContent = "00";
        dataHours.textContent = "00";
        dataMins.textContent = "00";
        dataSecs.textContent = "00";
      }
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 15, 2020 01:50:00"),
});

timer.start();
