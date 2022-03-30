import useGet from "../hooks/useGet";
import OrderCard from "./OrderCard";

export default function OrderQueue({ handleFetch, refetch }) {
  // custom hook that get order results from the Order Pizza API. If the refetch props updates the useGet hook will rerun.
  let { data, loading, error } = useGet(
    "https://order-pizza-api.herokuapp.com/api/orders",
    refetch
  );

  // delete and order from the order queue
  const handleDelete = (id) => {
    fetch("https://order-pizza-api.herokuapp.com/api/orders/" + id, {
      method: "DELETE",
    }).then((res) => {
      handleFetch();
    });
  };

  return (
    <div className="order-queue">
      <h2>Order Queue</h2>
      {data &&
        data.map((order) => (
          <OrderCard
            key={order.Order_ID}
            order={order}
            handleDelete={handleDelete}
          />
        ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
