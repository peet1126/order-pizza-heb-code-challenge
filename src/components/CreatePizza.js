import { useState } from "react";
import { useSelector } from "react-redux";

export default function CreatePizza({ handleFetch }) {
  const [Crust, setCrust] = useState("");
  const [Flavor, setFlavor] = useState("");
  const [Size, setSize] = useState("");
  const [Table_No, setTable] = useState("");
  const [error, setError] = useState(null);

  // access Redux store state
  const userToken = useSelector((state) => state.user.token);
  const nextNumber = useSelector((state) => state.nextOrder);

  // sends a POST request to the api with component state as the body of the POST request
  const handleSubmit = (e) => {
    e.preventDefault();

    const Timestamp = new Date().toJSON();

    // using Redux state to store the order number for the next order. this way the oder numbers will increment by 1 after every order.
    const Order_ID = nextNumber;

    const pizza = { Crust, Flavor, Size, Table_No, Timestamp, Order_ID };

    fetch("https://order-pizza-api.herokuapp.com/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
      body: JSON.stringify(pizza),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        handleFetch();
        setCrust("");
        setFlavor("");
        setSize("");
        setTable("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="create">
      <h2>Create A Pizza</h2>
      <form onSubmit={handleSubmit} className="order-card">
        <label>Crust:</label>
        <input
          type="text"
          required
          value={Crust}
          onChange={(e) => setCrust(e.target.value)}
        />
        <label>Flavor:</label>
        <input
          type="text"
          required
          value={Flavor}
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label>Size:</label>
        <input
          type="text"
          required
          value={Size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label>Table Number:</label>
        <input
          type="number"
          required
          value={Table_No}
          onChange={(e) => setTable(parseInt(e.target.value))}
        />
        <button>Place Order</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
