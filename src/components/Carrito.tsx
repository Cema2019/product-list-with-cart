import React from "react";
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";

// Interface for cart items
type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

// Props for the Cart component
type Props = {
  items: CartItem[];
  total: number;
  removeFromCart: (id: number) => void;
  toggleCart: () => void;
};

function Cart({ items, total, removeFromCart, toggleCart }: Props) {
  return (
    <div className="cart-container col-md-2 mb-1">
      <div className="cart card mb-2">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
        </div>
        <div className="cart-body card-body">
          {items.length === 0 ? (
            // Show an empty cart illustration if there are no items
            <div className="text-center">
              <img src={emptyCartImage} alt="Empty cart" />
              <p>Your cart is empty. Add some items!</p>
            </div>
          ) : (
            // Show the list of items in the cart
            <div>
              <ul className="cart-list list-group">
                {items.map(({ id, title, quantity, price }) => (
                  <li
                    key={id}
                    className="cart-item list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{title}</strong>
                      <div>
                        {quantity} &times; ${price.toFixed(2)}
                      </div>
                    </div>
                    <span className="cart-badge badge bg-secondary rounded-pill">
                      ${(price * quantity).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(id)}
                      style={{ marginLeft: "10px", fontSize: "16px" }}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total-container">
                <h3 className="cart-total mt-3">Order Total</h3>
                <p className="cart-price">${total.toFixed(2)}</p>
              </div>
              <div>
                <button
                  className="btn-cart btn btn-danger btn-sm"
                  onClick={toggleCart}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
