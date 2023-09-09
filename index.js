let currentDay = document.getElementById('day')
let currentTimeInMilliseconds = document.getElementById('time');
const daysOfTheWeek = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



setInterval(() => {
  let currentUTCDate = new Date();
  let day = currentUTCDate.getUTCDay();
  let milliseconds = currentUTCDate.getTime();

  currentDay.textContent = daysOfTheWeek[day - 1]
  currentTimeInMilliseconds.textContent = milliseconds
}, 1000)