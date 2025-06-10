import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const PrintableReceipt = React.forwardRef(({ cart, billId }, ref) => (
  <div ref={ref}>
    <h3>Receipt</h3>
    {cart.map(item => (
      <div key={item._id}>
        {item.name} x {item.quantity} = ₹{item.quantity * item.price}
      </div>
    ))}
    <p><strong>Bill ID:</strong> {billId}</p>
  </div>
));

function ReceiptPrint({ cart, billId }) {
  const ref = useRef();

  return (
    <div>
      <PrintableReceipt ref={ref} cart={cart} billId={billId} />
      <ReactToPrint
        trigger={() => <button>Print Receipt</button>}
        content={() => ref.current}
      />
    </div>
  );
}

export default ReceiptPrint;
