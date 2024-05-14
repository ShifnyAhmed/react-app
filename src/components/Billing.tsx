import React, { useState } from "react";

function Billing() {
  const [name, setName] = useState("Enter Name");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(event.target.value));
  }

  function handlePaymentMethodChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setPaymentMethod(event.target.value);
  }

  return (
    <div className="card-billing">
      <input
        className="billing-name"
        value={name}
        onChange={handleNameChange}
      />
      <p className="billing-details">
        Name: {name === "Enter Name" ? "" : name}
      </p>

      <input
        className="billing-quantity"
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      />
      <p className="billing-details">
        Quantity:{" "}
        {quantity < 1
          ? "Please add atleast 1 item to complete checkout"
          : quantity}
      </p>

      <select
        className="billing-payment"
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
      >
        <option value="select">Select a Payment Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
      </select>
      <p className="billing-details">
        Payment:{" "}
        {paymentMethod === "select"
          ? "Please select a payment method to continue"
          : paymentMethod}
      </p>
    </div>
  );
}

export default Billing;
