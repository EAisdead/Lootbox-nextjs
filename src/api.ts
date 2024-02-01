const api = {
  item: {
    home: () =>
      fetch(
        `https://my-json-server.typicode.com/EAisdead/Lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            items_cat: {
              id: string;
              rates: number;
              common: {
                name: string;
              }[];
            }[];
          }>
      ),
    ratess: () =>
      fetch(
        `https://my-json-server.typicode.com/EAisdead/Lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            id: number;
            name: string;
            rate: number;
          }>
      ),
  },
};
export default api;
