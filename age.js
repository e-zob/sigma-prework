const date = new Date();
const dateNow = date.getTime();

function getDiff() {
  let getDate = prompt("Enter date in yyyy-mm-dd format:");
  let userDate = Date.parse(getDate);
  while (isNaN(userDate)) {
    getDate = prompt("Wrong format. Enter date in yyyy-mm-dd format:");
    userDate = Date.parse(getDate);
  }
  let diff = Math.abs(userDate - dateNow);
  let diffYrs = Math.round(diff / 31556952000);
  return diffYrs;
}

console.log(getDiff());
