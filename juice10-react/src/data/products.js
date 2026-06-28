import { useState } from "react";

const products = [
  { name: "Espresso", price: 15000, type: "coffee" },
  { name: "Americano", price: 20000, type: "coffee" },
  { name: "Cappuccino", price: 25000, type: "coffee" },
  { name: "Latte", price: 25000, type: "coffee" },

  { name: "Matcha", price: 35000, type: "non" },
  { name: "Red Velvet", price: 30000, type: "non" },
  { name: "Jus Alpukat", price: 20000, type: "non" },

  { name: "Nasi Goreng Telur", price: 30000, type: "food" },
  { name: "Nasi Goreng Kampung", price: 35000, type: "food" },
  { name: "Ayam Penyet", price: 30000, type: "food" },

  { name: "Pisang Coklat", price: 25000, type: "snack" },
  { name: "Kentang Goreng", price: 15000, type: "snack" },
  { name: "Telur Puding", price: 10000, type: "snack" },
];

export default function Product() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.type === filter);

  return (
    <main className="product-container">

      <div className="filter-btn">
        <label onClick={() => setFilter("all")}>All</label>
        <label onClick={() => setFilter("coffee")}>Coffee</label>
        <label onClick={() => setFilter("non")}>Non Coffee</label>
        <label onClick={() => setFilter("food")}>Main Course</label>
        <label onClick={() => setFilter("snack")}>Snack</label>
      </div>

      <div className="grid">
        {filtered.map((item, i) => (
          <div className="card" key={i}>
            <img src={`/product/${item.name}.jpg`} />
            <h3>{item.name}</h3>
            <p>Rp {item.price.toLocaleString("id-ID")}</p>
          </div>
        ))}
      </div>

    </main>
  );
}