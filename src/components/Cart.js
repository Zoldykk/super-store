import { useContext, useEffect, useState, useReducer } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "./styles/Cart.css";

function Cart() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [cartProducts, setCartProducts] = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let cartTotal = [];
    let subTotal = 0;
    cartProducts.map((product) => {
      cartTotal.push(product.total);
    });
    cartTotal.map((number) => {
      subTotal += number;
    });
    setTotal(subTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  const removeItem = (e) => {
    let items = cartProducts;
    const findIndex = items.findIndex((item) => item._id == e.target.dataid);
    items.splice(findIndex, 1);
    setCartProducts(items);
    calculateTotal();
    forceUpdate();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="cart-header mb-4">
          <h2>Shopping Cart</h2>
        </div>
        {cartProducts.length === 0 ? (
          <h1 className="text-center">Your Cart is Empty!</h1>
        ) : (
          <>
            <div className="cart-items">
              {cartProducts.map((product) => (
                <div className="cart-item" key={product.id}>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="font-weight-bold">{product.name}</span>
                    </div>
                    <div className="item-quantity">
                      <span>Quantity:</span>
                      <input type="text" value={product.quantity} readOnly />
                    </div>
                    <div className="price">
                      <span className="font-weight-bold">{`$${product.price}`}</span>
                    </div>
                  </div>
                  <div className="item-options">
                    <button
                      onClick={removeItem}
                      dataid={product._id}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <Link onClick={() => setCartProducts([])} to="/checkout">
                <button className="btn btn-warning font-weight-bold m-3">
                  Checkout
                </button>
              </Link>
              <span className="font-weight-bold m-3">{`$${total}`}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
