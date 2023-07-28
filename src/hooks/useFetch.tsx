import { useState, useEffect } from "react";

type Cats = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const useFetch = (url: string) => {
  const [cats, setCats] = useState<Cats[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Cats[]) => {
        const cats = data.map((cat: Cats) => {
          return {
            id: cat.id,
            url: cat.url,
            width: cat.width,
            height: cat.height,
          };
        });
        setCats(cats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return cats;
};

export default useFetch;
