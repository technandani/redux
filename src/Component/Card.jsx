import React from "react";

const Card = ({ todo, addTodo }) => {
  return (
    <div className="leftBox">
      <div className="box">
        <div className="cart">
          <div className="productImage">
            <img src={todo?.img} alt="" className="img h-20 w-20" />
          </div>
          <div className="productInfoBox">
            <div className="productInfo">
              <div className="productName">{todo?.title}</div>
              <div className="productPrice">₹{todo?.price}</div>
              <button type="button" className="addToCartBtn" onClick={addTodo}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;