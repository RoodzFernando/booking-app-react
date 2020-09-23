export default function currentTime(max = 0) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
  const currentMonth = (currentDate.getMonth() + max);
  const currentMonth2 = (currentMonth < 10 ? `0${currentMonth + 1}` : currentMonth);
  const currentYear = currentDate.getFullYear();

  const currentHour = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
  const currentMinutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

  const minDate = `${currentYear}-${currentMonth2}-${currentDay}T${currentHour}:${currentMinutes}`;
  return minDate;
}
