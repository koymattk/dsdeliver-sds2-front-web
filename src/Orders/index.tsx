import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';


import { fetchProducts, savaOrder } from '../api';
import { checkIsSelected, formatPrice } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationData, Product } from './types';

const Orders = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation] = useState<OrderLocationData>()
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)
    useEffect(()=>{
        
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(err => console.log('error: ' + err));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
    }
    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        savaOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
    }
    
    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products = {products}
                onSelectProduct={handleSelectProduct}
                selectedProduts={selectedProducts}
            />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
            <OrderSummary amount={selectedProducts.length}
                totalPrice={formatPrice(totalPrice)}
                onSubmit={handleSubmit}
            />
        </div>
            
    );
}

export default Orders;