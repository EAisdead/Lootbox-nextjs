const api = {
  item: {
    rates: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            rates: {
              id: number;
              name: string;
              rate: number;
            }[];
          }>
      ),

    home: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            legendary: {
              id: number;
              name: string;
              image_url: string;
            }[];
          }>
      ),
  },
};

export default api;
