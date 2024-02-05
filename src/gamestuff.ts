const rateArr = [1, 10, 30, 100];
const odds = Math.floor(Math.random() * 100);

function results() {
  for (let i = 0; i < rateArr.length; i++) {
    if (odds <= rateArr[i]) {
      return rateArr[i];
    }
  }
}
