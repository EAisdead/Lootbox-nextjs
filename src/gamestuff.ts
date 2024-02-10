import api from "./api";
export async function legendary() {
  const { legendary } = await api.item.legendary();
  const mArr = legendary.map((item) => [item.id, item.name, item.image_url]);
  return mArr;
}
export async function epic() {
  const { epic } = await api.item.epic();
  const mArr = epic.map((item) => [item.id, item.name, item.image_url]);
  return mArr;
}
export async function rare() {
  const { rare } = await api.item.rare();
  const mArr = rare.map((item) => [item.id, item.name, item.image_url]);
  return mArr;
}
export async function common() {
  const { common } = await api.item.common();
  const mArr = common.map((item) => [item.id, item.name, item.image_url]);
  return mArr;
}

export async function ratePor(id: string) {
  const item = await api.item.ratesDrops(id);
  return item.name;
}

const asdasd = ["1", "2", "3", "4"];

export async function asd() {
  const { rates } = await api.item.ratesId();
  const ratesArr = rates.map((item) => item.rate_por);
  const odds = Math.floor(Math.random() * 100);
  for (let i = 0; i < ratesArr.length; i++) {
    if (odds <= ratesArr[i]) {
      switch (ratesArr[i]) {
        case 1:
          return legendary();
          break;
        case 10:
          return epic();
          break;
        case 30:
          return rare();
          break;
        case 100:
          return common();
          break;
        default:
          "error";
          break;
      }
    }
  }
}

const rateArr = [1, 10, 30, 100];
const oddss = Math.floor(Math.random() * 100);

export function results() {
  for (let j = 0; j < rateArr.length; j++) {
    if (oddss <= rateArr[j]) {
      return rateArr[j];
    }
  }
}
