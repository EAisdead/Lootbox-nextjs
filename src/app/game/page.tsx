import api from "@/api";
import Image from "next/image";

export default async function GamePage() {
  const { items_cat } = await api.item.home();
  const commons = await api.item.common();
  return (
    <div>
      <section>
        {items_cat.map((item) => (
          <div key={item.id} className="border-2">
            <p>{item.id} </p>
            <p>{item.rate} </p>
          </div>
        ))}
      </section>
      <section className="border-2">
        <p>{commons.id} </p>
        <p>{commons.rate} </p>
      </section>
    </div>
  );
}
