import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        name="amount"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setAmount(count)}>Set</button>
      <div>Set Value:{amount}</div>
      <input
        type="test"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setShowName(name)}>SetName</button>
      <h2>{showName}</h2>
    </div>
  );
};
