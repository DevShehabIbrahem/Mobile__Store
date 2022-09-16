import { useEffect, useState } from "react";

//Custom Hook To Fetch Data
const Usefetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })

      .then((res) => {
        setData(res);
        setLoading(false);
      })

      .catch((error) => {
        console.log("you have an error ", error);
      });
  }, []);

  return { data, loading };
};

export default Usefetch;
