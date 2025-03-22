import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem, decrementItem, removeFromCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const CartRender = ({currentPage}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((acc, item) => acc + Number(item.price) * item.count, 0);

  const handleIncrement = (sno) => {
    dispatch(incrementItem(sno));
  };

  const handleDecrement = (sno) => {
    const item = cart.find(item => item.sno === sno);
    if (item && item.count === 1) {
      dispatch(removeFromCart(sno)); 
    } else {
      dispatch(decrementItem(sno)); 
    }
  };

  const handelNav=()=>{
    currentPage=='MainBox'? navigate('/paymentbox') : navigate('/mainbox');
  }

  return (
    <div className="rightBox !p-6">
      <div className="addedItemHeading">Shopping Cart</div>
      <div className="addedItemList">
        {cart.length === 0 ? (
          <div className="text-center !my-10 text-xl">No items in the cart</div>
        ) : (
          <div className="table">
            <table id="addedItemTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody className="">
                {cart.map((item) => (
                  <tr key={item.sno} className="p-6">
                    <td className="">
                      <div className="cartImage !p-2">
                        <img src={item.img} alt="" className="img rounded-2xl h-14 w-14" />
                      </div>
                    </td>
                    <td>
                      <div className="productName">{item.title}</div>
                      <div className="productPrice">₹{item.price}</div>
                    </td>
                    <td className="text-2xl flex gap-2 items-center justify-center">
                      <button onClick={() => handleDecrement(item.sno)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => handleIncrement(item.sno)}>+</button>
                    </td>
                    {/* <td>
                      <button onClick={() => handleRemoveFromCart(item.sno)}>Remove</button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="amountInfo !py-10">
          <div>Total Amount: ₹{totalAmount}</div>
        </div>
        <button onClick={handelNav} className="bg-green-800 w-full h-8 text-lg p-2 !mt-4 rounded">Go to Payment</button>
      </div>
    </div>
  );
};

export default CartRender;