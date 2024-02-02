import api from "@/api";
import Image from "next/image";

export default async function GamePage() {
  const { rates } = await api.item.rates();
  const { legendary } = await api.item.home();
  return (
    <div>
      {rates.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} \|/ {item.rate}{" "}
          </p>
        </div>
      ))}
      {legendary.map((item) => (
        <div key={item.id}>
          <p>
            {item.id} \|/ {item.name}{" "}
          </p>
          <Image
            src={item.image_url}
            alt={item.name}
            width={32}
            height={32}
          ></Image>
        </div>
      ))}
    </div>
  );
}
