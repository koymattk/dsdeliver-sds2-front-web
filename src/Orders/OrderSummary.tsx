import Footer from "../Footer";
type Props = {
    amount:number;
    totalPrice:string;
    onSubmit: () => void;
}
const OrderSummary = ({amount,totalPrice, onSubmit}:Props) => {
    return(
        <>
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container"><strong className="amount-selected">{amount}</strong> PEDIDOS SELECIONADOS</span>
                    <span className="order-summary-total"><strong className="amount-selected">{totalPrice}</strong>VALOR TOTAL</span>
                </div>
                <button 
                    className="order-summary-make-order"
                    onClick={onSubmit}
                    >FAZER PEDIDO</button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default OrderSummary;