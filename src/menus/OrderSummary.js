import React, { useContext } from "react";
import OrderContext from "./OrderContext";

export default function OrderSummary() {
  const [order, setOrder] = useContext(OrderContext);
  const removeItem = (e, item) => {
    let updatedOrder = order.filter((element) => {
      return element !== item;
    });
    setOrder(updatedOrder);
  };
//Orders are saved to a map, map then displays orders.
//If the user clicks on an order in their list, it will remove the order
  return (
    <div>
      <h2>Your Order</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index} onClick={(e) => removeItem(e, item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
