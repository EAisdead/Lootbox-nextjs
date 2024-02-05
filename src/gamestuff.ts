import api from "./api";
export async function smite() {
  const { rates } = await api.item.rateDrops();
  const ratesArr = [rates.map((item) => item.rate_por)];
  return ratesArr;
}

const rateArr = [1, 10, 30, 100];
const odds = Math.floor(Math.random() * 100);

export function results() {
  for (let i = 0; i < rateArr.length; i++) {
    if (odds <= rateArr[i]) {
      return rateArr[i];
    }
  }
}
