import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
        <Button className="btn-count" onClick={handleDecrease} disabled={count <= 1}>−</Button>
        <div className="count-display">{count}</div>
        <Button className="btn-count" onClick={handleIncrease} disabled={count >= stock}>+</Button>
      </div>
      <Button variant="light" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
