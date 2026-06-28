import { useState } from "react";

const prices = {
  Espresso: 15000,
  Americano: 20000,
  Cappuccino: 25000,
  Latte: 25000,
  Matcha: 35000,
  "Red Velvet": 30000,
};

export default function Order() {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState(1);
  const [receipt, setReceipt] = useState(null);

  const total = prices[product] * qty || 0;

  function handleOrder(e) {
    e.preventDefault();

    if (!product) return alert("Pilih produk dulu");

    setReceipt({
      product,
      qty,
      total,
      date: new Date().toLocaleString("id-ID"),
    });
  }

  return (
    <main id="Checkout">

      <section className="checkout-form-section">

        <h2>Purchase Form</h2>

        <form onSubmit={handleOrder}>

          <select onChange={(e) => setProduct(e.target.value)}>
            <option value="">Choose Product</option>
            {Object.keys(prices).map((p, i) => (
              <option key={i}>{p}</option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <h3>Total: Rp {total.toLocaleString("id-ID")}</h3>

          <button type="submit">Confirm Order</button>

        </form>

      </section>

      {receipt && (
        <section className="receipt-section">
          <h2>Order Receipt</h2>
          <p>Product: {receipt.product}</p>
          <p>Quantity: {receipt.qty}</p>
          <p>Total: Rp {receipt.total}</p>
          <p>Date: {receipt.date}</p>
        </section>
      )}

    </main>
  );
}