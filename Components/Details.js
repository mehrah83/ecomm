import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <div className="details__img">
              <img src={`/images/${product.image}`} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="details__name">{product.name}</div>
            <div className="details__prices">
              <span className="details__actual">₹{product.price}</span>
              <span className="details__discount">
                ₹{product.discountPrice}
              </span>
            </div>
            <div className="details__info my-2">
              <div className="details__incdec">
                <span className="dec" onClick={decQuantity}>
                  <BsDash />
                </span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                  <BsPlus />
                </span>
                <button
                  className="btn btn-dark w-100 mx-2 text-uppercase"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { product, quantity },
                    })
                  }
                >
                  add to cart
                </button>
              </div>
            </div>
            <div className="details__p">{product.desc}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
