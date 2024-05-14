import React, { useState } from "react";

interface Customer {
  firstName: string;
  lastName: string;
  respect: string;
}

function Customer() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerRespect, setCustomerRespect] = useState("Mr. ");

  function handleAddCustomer() {
    const newCustomer = {
      firstName: customerFirstName,
      lastName: customerLastName,
      respect: customerRespect,
    };

    setCustomers((c) => [...c, newCustomer]);
  }
  function handleRemoveCustomer(index: number) {
    setCustomers(customers.filter((element, i) => i !== index));
  }
  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCustomerFirstName(event.target.value);
  }
  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCustomerLastName(event.target.value);
  }
  function handleRespectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setCustomerRespect(event.target.value);
  }

  return (
    <div>
      <h1> List of Customer Objects</h1>

      <ul>
        {customers.map((customer, index) => (
          <li key={index} onClick={() => handleRemoveCustomer(index)}>
            {customer.respect}
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter Your First Name"
        onChange={handleFirstNameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your Last Name"
        onChange={handleLastNameChange}
      />
      <br />
      <select id="respect" onChange={handleRespectChange}>
        <option value="Mr. ">Mr</option>
        <option value="Mrs. ">Mrs</option>
        <option value="Miss. ">Mis</option>
      </select>
      <br />
      <br />
      <button onClick={handleAddCustomer}>Add Customer</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Customer;
