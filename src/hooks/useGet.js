import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nextOrderNumber } from "../store/slices/orders";

const useGet = (url, rerender) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not run GET method from this resource.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);

        // sorts all the order by Order_ID and puts them in descending order and returns the larges order number plus one. this is for the use case of orders being create by the api or other app connected to the same api.
        const nextNumber =
          data.sort((a, b) => {
            return b.Order_ID - a.Order_ID;
          })[0].Order_ID + 1;
        dispatch(nextOrderNumber(nextNumber));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Get aborted");
        } else {
          setLoading(false);
          setError(err.message);
          console.log(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url, rerender, dispatch]);
  return { data, loading, error };
};

export default useGet;
