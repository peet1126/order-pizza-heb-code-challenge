import { useState } from "react";
import CreatePizza from "./CreatePizza";
import OrderQueue from "./OrderQueue";

export default function Home() {
  const [refetch, setRefetch] = useState(false);

  // handleFetch triggers a rerun of the useGet hook every time the refetch state changes. this cause the Order Queue list to rerender if a order is added or deleted.
  const handleFetch = () => {
    setRefetch((refetch) => !refetch);
  };

  return (
    <div className="home">
      <CreatePizza handleFetch={handleFetch} />
      <OrderQueue handleFetch={handleFetch} refetch={refetch} />
    </div>
  );
}
