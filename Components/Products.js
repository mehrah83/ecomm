import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">LATEST PRODUCTS</h1>
        <div className="row mx-5">
          {products.map((product) => (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={product.id}>
              <div className="card my-3" style={{ width: "18rem" }}>
                <img
                  src={`/images/${product.image}`}
                  className="card-img-top"
                  alt="image name"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {product.name.slice(0, 12)}...
                  </h5>
                  <div className="product text-center">
                    <div>
                      <span style={{ textDecoration: "line-through" }}>
                        ₹{product.price}
                      </span>
                    </div>
                    <div>Price: ₹{product.discountPrice}</div>
                  </div>
                  <Link
                    to={`/details/${product.id}`}
                  >
                    <button className="btn btn-primary my-2" style={{marginLeft:"80px"}}>
                    Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
