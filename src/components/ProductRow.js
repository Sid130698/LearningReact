import "./ProductRow.css";

export default function ProductRow({ productName, price, stock }) {
  return (
    <tr className={stock ? "" : "not_in_stocks"}>
      
            <td>{productName}</td>
            <td>{price}</td>
    </tr>
  );
}
