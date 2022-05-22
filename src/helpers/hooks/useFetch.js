import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("The data is not exist!");
        }
        return res.json();
      })
      .then((data) => setData(data));
  }, [url]);

  return { data };
}
export default useFetch;
