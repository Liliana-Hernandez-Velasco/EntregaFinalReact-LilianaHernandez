import React from 'react';

const OrderSuccess = ({ orderId }) => {
  return (
    <div>
      <h2>🎉 ¡Gracias por tu compra!</h2>
      <p>Tu orden fue registrada exitosamente.</p>
      <p className="text-success">ID de orden: <strong>{orderId}</strong></p>
      <p>Te llegará un correo con los detalles. 💌</p>
    </div>
  );
};

export default OrderSuccess;
