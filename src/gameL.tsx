import api from "./api";
import Image from "next/image";

export async function legendary() {
  const { legendary } = await api.item.legendary();
  const mArr = legendary.map((item) => [item.name, item.image_url]);
  return (
    <div>
      <Image
        src={mArr[0][1].toString()}
        alt={mArr[0][0].toString()}
        width={256}
        height={256}
        placeholder="empty"
        className="rounded-lg"
      ></Image>
      <p className="my-8 text-lg bg-orange-400 rounded-xl text-black">
        {mArr[0][0].toString().charAt(0).toLocaleUpperCase() +
          mArr[0][0].slice(1)}
      </p>
    </div>
  );
}
export async function epic() {
  const { epic } = await api.item.epic();
  const mArr = epic.map((item) => [item.name, item.image_url]);
  const odds = Math.floor(Math.random() * 100);
  if (odds <= 55) {
    return (
      <div>
        <Image
          src={mArr[0][1].toString()}
          alt={mArr[0][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-purple-700 rounded-xl text-black">
          {mArr[0][0].charAt(0).toLocaleUpperCase() + mArr[0][0].slice(1)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <Image
          src={mArr[1][1].toString()}
          alt={mArr[1][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-purple-700 rounded-xl text-black">
          {mArr[1][0].charAt(0).toLocaleUpperCase() + mArr[1][0].slice(1)}
        </p>
      </div>
    );
  }
}
export async function rare() {
  const { rare } = await api.item.rare();
  const mArr = rare.map((item) => [item.name, item.image_url]);
  const odds = Math.floor(Math.random() * 100);
  if (odds <= 33) {
    return (
      <div>
        <Image
          src={mArr[0][1].toString()}
          alt={mArr[0][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-blue-600 rounded-xl text-black">
          {mArr[0][0].charAt(0).toLocaleUpperCase() + mArr[0][0].slice(1)}
        </p>
      </div>
    );
  } else if (odds <= 66) {
    return (
      <div>
        <Image
          src={mArr[1][1].toString()}
          alt={mArr[1][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-blue-600 rounded-xl text-black">
          {mArr[1][0].charAt(0).toLocaleUpperCase() + mArr[1][0].slice(1)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <Image
          src={mArr[2][1].toString()}
          alt={mArr[2][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-blue-600 rounded-xl text-black">
          {mArr[2][0].charAt(0).toLocaleUpperCase() + mArr[2][0].slice(1)}
        </p>
      </div>
    );
  }
}
export async function common() {
  const { common } = await api.item.common();
  const mArr = common.map((item) => [item.name, item.image_url]);
  const odds = Math.floor(Math.random() * 100);
  if (odds <= 33) {
    return (
      <div>
        <Image
          src={mArr[0][1].toString()}
          alt={mArr[0][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-gray-300 rounded-xl text-black">
          {mArr[0][0].charAt(0).toLocaleUpperCase() + mArr[0][0].slice(1)}
        </p>
      </div>
    );
  } else if (odds <= 66) {
    return (
      <div>
        <Image
          src={mArr[1][1].toString()}
          alt={mArr[1][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <p className="my-8 text-lg bg-gray-300 rounded-xl text-black">
          {mArr[1][0].charAt(0).toLocaleUpperCase() + mArr[1][0].slice(1)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <Image
          src={mArr[2][1].toString()}
          alt={mArr[2][0].toString()}
          width={256}
          height={256}
          placeholder="empty"
          className="rounded-lg"
        ></Image>
        <div className="bg-gray-300 text-black">
          <p className="my-8 text-lg rounded-xl border-2 bg-gray-300">
            {mArr[2][0].charAt(0).toLocaleUpperCase() + mArr[2][0].slice(1)}
          </p>
        </div>
      </div>
    );
  }
}

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
