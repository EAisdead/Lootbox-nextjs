const api = {
  item: {
    home: () =>
      fetch(``).then(
        (res) =>
          res.json() as Promise<{
            items_cat: {
              id: string;
              rate: number;
              items: {
                id: number;
                name: string;
                image_url: string;
              }[];
            }[];
          }>
      ),
  },
};
export default api;
