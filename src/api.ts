const api = {
  item: {
    home: () =>
      fetch(
        `https://my-json-server.typicode.com/EAisdead/Lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            items_cat: {
              id: number;
              title: string;
              rate: number;
            }[];
          }>
      ),
    common: () =>
      fetch(
        `https://my-json-server.typicode.com/EAisdead/Lootbox-nextjs/common`
      ).then(
        (res) =>
          res.json() as Promise<{
            id: number;
            title: string;
            rate: number;
            items: {
              id: number;
              name: string;
              image_url: string;
            }[];
          }>
      ),
  },
};
export default api;
