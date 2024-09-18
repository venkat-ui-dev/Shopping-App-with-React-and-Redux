import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Store/Store"
import { Button } from "../CommonComponent/Button";
import { cartAction } from "../../Store/CartSlice";

export const Cart = () => {

    const { itemList, totalQuantity, overallPrice } = useSelector((state: RootState) => state.CartSlice);

    const dispatch = useDispatch();

    const addToCartHandler = (item: any) => {
        dispatch(cartAction.addToCart(item))
    }
    const removeFromCartHandler = (itemID: number) => {
        dispatch(cartAction.removeItemFromCart(itemID))
    }

    return (
        <div className="cart-container">
            {itemList.length != 0 ? <>
                <ul className="item-ul">
                    {itemList.map((item: any) => (
                        <li className="cart-item" key={item.id}>
                            <p><img src={item.image} alt={item.title} width={80} height={80} /></p>
                            <p>{item.title} - {item.quantity} x &#x20b9;{item.price}</p>
                            <p className="cart-item-actions">
                                <button onClick={() => removeFromCartHandler(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => addToCartHandler(item)}>+</button>
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="cart-summary">
                    <p>Total Item: &#x20b9;{totalQuantity}</p>
                    <p>Total Amount: &#x20b9;{overallPrice}</p>
                    <Button>Proceed to Pay</Button>
                </div>
            </> : <h3 className="cart">No Item Found!</h3>}
        </div>
    )
}
