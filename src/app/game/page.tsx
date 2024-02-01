import api from "@/api";

export default async function GamePage() {
  const { items_cat } = await api.item.home();
  return (
    <div>
      {items_cat.map((item) => (
        <div key={item.id}>
          <p>{item.id} </p>
          <p>{item.rate} </p>
        </div>
      ))}
    </div>
  );
}
