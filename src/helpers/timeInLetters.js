/* eslint-disable radix */
function dateInLetters(currDate) {
  const firstPart = currDate.split('-').join();
  const secondPart = firstPart.split('T').join(',').split(',');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const look = secondPart[1];
  const completeDate = `${secondPart[2]} ${months[parseInt(look) - 1]} ${secondPart[0]}, ${secondPart[3]}`;
  return completeDate;
}

export default dateInLetters;
