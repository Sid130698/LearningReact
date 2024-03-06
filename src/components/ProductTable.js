import Category from "./Category";
import ProductRow from "./ProductRow";
import "./ProductTable.css";
import { useState } from "react";

export default function ProductTable({ data }) {
  const [onlyStocked, setOnlyStocked] = useState(false);
  const [searchText, setSearchText] = useState("");
  function ViewStockItemsOnly() {
    setOnlyStocked(!onlyStocked);
  }
  function SearchThis() {}
  const groupByCategories = {};
  data.forEach((element) => {
    if (!groupByCategories[element.category]) {
      groupByCategories[element.category] = [];
    }
    groupByCategories[element.category].push(element);
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search..."
        />
        <ProductRow productName="Name" price="price" />
        <input
          type="checkbox"
          checked={onlyStocked}
          onChange={ViewStockItemsOnly}
        />
        <label>Check this box for only viewing items in stocks</label>
        {Object.keys(groupByCategories).map((category) => (
          <table>
            <thead>
              <h3>{category}</h3>
            </thead>
            <tbody>
              {groupByCategories[category].map((product) => {
                if (
                  (onlyStocked && !product.stocked) ||
                  !product.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return null;
                }
                return (
                  <Category
                    category={category}
                    product={{
                      name: product.name,
                      price: product.price,
                      stock: product.stocked,
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}
