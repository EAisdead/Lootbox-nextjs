const api = {
  item: {
    rateDrops: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/rates`
      ).then(
        (res) =>
          res.json() as Promise<{
            rates: {
              id: number;
              name: string;
              rate: number;
              rate_por: number;
            }[];
          }>
      ),
  },
};
export default api;
