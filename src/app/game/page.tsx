import api from "@/api";
import Image from "next/image";

export default async function GamePage() {
  const { items_cat } = await api.item.home();
  return (
    <div>
      <section className="border-2">
        {items_cat.map((item) => (
          <div key={item.id}>
            <p>{item.id} </p>
            <p>{item.rates} </p>
          </div>
        ))}
      </section>
    </div>
  );
}
