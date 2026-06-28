import { useState } from "react";
import { products } from "../data/products";

export default function Product() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.type === filter);

  return (
    <div className="product-page">

      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("coffee")}>Coffee</button>
        <button onClick={() => setFilter("non")}>Non Coffee</button>
        <button onClick={() => setFilter("food")}>Food</button>
        <button onClick={() => setFilter("snack")}>Snack</button>
      </div>

      <div className="grid">
        {filtered.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.name}</h3>
            <p>Rp {item.price.toLocaleString("id-ID")}</p>
          </div>
        ))}
      </div>

    </div>
  );
}