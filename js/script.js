const dateArithmetic = (dday) => {
  const seconds_divisor = 1000;
  const minutes_divisor = 1000 * 60;
  const hours_divisor = 1000 * 60 * 60;
  const days_divisor = 1000 * 60 * 60 * 24;

  let difference = dday.getTime() - Date.now();

  let days = Math.floor(difference / days_divisor);
  let day_remainder = difference % days_divisor;

  let hours = Math.floor(day_remainder / hours_divisor);
  let hour_remainder = day_remainder % hours_divisor;

  let minutes = Math.floor(hour_remainder / minutes_divisor);
  let minute_remainder = hour_remainder % minutes_divisor;

  let seconds = Math.floor(minute_remainder / seconds_divisor);

  return [
    { label: "days", value: days },
    { label: "hours", value: hours },
    { label: "minutes", value: minutes },
    { label: "seconds", value: seconds },
  ];

};

function draw() {
  // const DEADLINE = new Date(2025, 5, 30, 23, 59, 59);
  const DEADLINE = new Date("2025-06-30 23:59:59");

  let data = dateArithmetic(DEADLINE);

  data.forEach((d) => {
    document.getElementById(`${d.label}`).innerHTML =
      `${d.value}<p>${d.label}</p>`;
  });
}

setInterval(draw, 1000);
