import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    navigate("/");
  };

  return (
    <>
      <div className="container h-[100vh]">
        <div className="PaymentDetails flex justify-center items-center">
          {/* <div className="amonut">Total Amount: ₹{totalAmount}</div> */}
          <div className="paymentBox border !bg-neutral-800">
            <div className="paymentTypeBox gap-4">
              <div className="paymentType !rounded-md">
                <i className="fa-solid fa-bag-shopping"></i>Cart
              </div>
              <div className="paymentType !rounded-md">
                <i className="fa-solid fa-bag-shopping"></i>Crypto
              </div>
              <div className="paymentType !rounded-md">
                <i className="fa-solid fa-bag-shopping"></i>Bank
              </div>
              <div className="paymentMoreType !rounded-md">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>

            <form onSubmit={handlePayment}>
              <div className="cardBox userInfo">
                <p>Card Number:</p>
                <input type="text" className="card border w-full h-9 rounded !px-2" />
              </div>

              <div className="cardTimeBox">
                <div className="expirytime box50 userInfo">
                  <p>Expiry:</p>
                  <input type="email" className="border w-full h-9 rounded !px-2" placeholder="MM/YY" />
                </div>
                <div className="cvcBox box50 userInfo">
                  <p className="cvcP">CVC:</p>
                  <input type="text" className="border w-full h-9 rounded !px-2" placeholder="value" />
                </div>
              </div>

              <div className="countryInfoBox userInfo">
                <div className="cvcBox box50">
                  <p className="cvcP">ZIP:</p>
                  <input
                    type="text"
                    className="border w-full h-9 rounded !px-2"
                    placeholder="XXX-XXXX"
                  />
                </div>
              </div>
            </form>
            <button className="continueBtn">Confirm payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
