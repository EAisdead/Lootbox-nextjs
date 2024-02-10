const api = {
  item: {
    legendary: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            legendary: {
              id: string;
              name: string;
              image_url: string;
            }[];
          }>
      ),
    epic: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            epic: {
              id: string;
              name: string;
              image_url: string;
            }[];
          }>
      ),
    rare: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            rare: {
              id: string;
              name: string;
              image_url: string;
            }[];
          }>
      ),
    common: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            common: {
              id: string;
              name: string;
              image_url: string;
            }[];
          }>
      ),
    ratesDrops: (id: string) =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/rates/${id}`
      ).then(
        (res) =>
          res.json() as Promise<{
            id: string;
            name: string;
            rate: number;
            rate_por: number;
          }>
      ),
    ratesId: () =>
      fetch(
        `https://my-json-server.typicode.com/eaisdead/lootbox-nextjs/db`
      ).then(
        (res) =>
          res.json() as Promise<{
            rates: {
              id: string;
              name: string;
              rate: number;
              rate_por: number;
            }[];
          }>
      ),
  },
};
export default api;
