import ProductRow from "./ProductRow";
import './Category.css'

export default function Category({category,product}){
    return(
        <>            
                <ProductRow productName = {product.name} price={product.price} stock={product.stock}/>
                
            
        </>
    )
}