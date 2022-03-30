export default function OrderCard({ order, handleDelete }) {
  return (
    <>
      {order && (
        <div className="order-card">
          <ul>
            <li>Order Number: {order.Order_ID}</li>
            <li>Size: {order.Size}</li>
            <li>Crust: {order.Crust}</li>
            <li>Flavor: {order.Flavor}</li>
            <li>Table Number: {order.Table_No}</li>
          </ul>
          <button
            onClick={() => handleDelete(order.Order_ID)}
            className="delete"
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
