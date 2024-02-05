import api from "./api";

async function RatesPorcentajes() {
  const { rates } = await api.item.rateDrops();
  const ratesArray = [0, rates.map((item) => item.rate_por)];
  return ratesArray[2];
}
export default RatesPorcentajes;
