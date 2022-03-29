import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <div className="container">
          <h3 className="text-center">Your cart</h3>
          {products.length > 0 ? (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="cart__heading">
                    <div className="row">
                      <div className="col-2">Picture</div>
                      <div className="col-2">Name</div>
                      <div className="col-2">Price</div>
                      <div className="col-2 text-center">Inc/Dec</div>
                      <div className="col-2 text-center">Total Price</div>
                      <div className="col-2">Remove</div>
                    </div>
                  </div>
                  {products.map((product) => (
                    <div className="row align-items-center cart__body" key={product.id}>
                      <div className="col-2 my-3">
                        <div className="cart__image">
                          <img src={`/images/${product.image}`} alt="" />
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart__name">{product.name}</div>
                      </div>
                      <div className="col-2">
                        <div className="cart__price">
                          ₹{product.discountPrice}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="details__info my-2">
                          <div className="details__incdec">
                            <span
                              className="dec"
                              onClick={() =>
                                dispatch({ type: "DEC", payload: product.id })
                              }
                            >
                              <BsDash />
                            </span>
                            <span className="quantity">{product.quantity}</span>
                            <span
                              className="inc"
                              onClick={() =>
                                dispatch({ type: "INC", payload: product.id })
                              }
                            >
                              <BsPlus />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart__total text-center">
                          ₹{product.discountPrice * product.quantity}
                        </div>
                      </div>
                      <div className="col-2">
                        <div
                          className="cart__remove"
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: product.id })
                          }
                        >
                          <BsReverseBackspaceReverse />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="summary my-4">
                  <h3
                    className="text-center summary__heading w-50"
                    style={{ marginLeft: "300px" }}
                  >
                    Summary
                  </h3>
                  <div className="summary__details">
                    <p className="text-center">
                      Total Items: {totalQuantities}{" "}
                    </p>
                    <p className="text-center">Total Price: ₹{totalPrice} </p>
                  </div>
                  <button
                    className="btn btn-primary w-50 checkout"
                    style={{ marginLeft: "300px" }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            "Your cart is empty"
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
