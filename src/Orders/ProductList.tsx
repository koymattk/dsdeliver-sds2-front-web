import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard"
import { Product } from "./types";

type Props = {
    products: Product[];
    onSelectProduct: (product:Product) => void;
    selectedProduts:Product[];
}
const ProductList = ({products, selectedProduts, onSelectProduct}: Props) =>{
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard product={product} key={product.id}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProduts, product)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;