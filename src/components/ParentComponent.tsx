import { useState } from "react";
import Cart from "./Cart"; 
import Card from "./Card";
import Order from "./Order";

import logoproducto1 from "../assets/images/image-waffle-desktop.jpg";
import logoproducto2 from "../assets/images/image-creme-brulee-desktop.jpg";
import logoproducto3 from "../assets/images/image-macaron-desktop.jpg";
import logoproducto4 from "../assets/images/image-tiramisu-desktop.jpg";
import logoproducto5 from "../assets/images/image-baklava-desktop.jpg";
import logoproducto6 from "../assets/images/image-meringue-desktop.jpg";
import logoproducto7 from "../assets/images/image-cake-desktop.jpg";
import logoproducto8 from "../assets/images/image-brownie-desktop.jpg";
import logoproducto9 from "../assets/images/image-panna-cotta-desktop.jpg";

type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

function ParentComponent() {
  const products = [
    { id: 1, src: logoproducto1, title: "Waffle with Berries", subtitle: "Waffle", price: 6.5 },
    { id: 2, src: logoproducto2, title: "Vanilla Bean Creme Brulée", subtitle: "Creme Brulée", price: 7.0 },
    { id: 3, src: logoproducto3, title: "Macaron Mix of Five", subtitle: "Macaron", price: 8.0 },
    { id: 4, src: logoproducto4, title: "Classic Tiramisu", subtitle: "Tiramisu", price: 5.5 },
    { id: 5, src: logoproducto5, title: "Pistachio Baklava", subtitle: "Baklava", price: 4.0 },
    { id: 6, src: logoproducto6, title: "Lemon Meringue Pie", subtitle: "Pie", price: 5.0 },
    { id: 7, src: logoproducto7, title: "Red Velvet Cake", subtitle: "Cake", price: 4.5 },
    { id: 8, src: logoproducto8, title: "Salted Caramel Brownie", subtitle: "Brownie", price: 5.5 },
    { id: 9, src: logoproducto9, title: "Vanilla Panna Cotta", subtitle: "Panna Cotta", price: 6.5 },
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [displayCart, setDisplayCart] = useState(false);

  // Toggle the cart visibility
  const toggleCart = () => {
    setDisplayCart(!displayCart);
  };

  // Add or update an item in the cart
  const addToCart = (product: { id: number; title: string; price: number }, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity = quantity;
      } else {
        // Add a new item to the cart
        prev.push({ ...product, quantity });
      }

      setTotal(recalculateTotal(prev));
      return [...prev];
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const updatedItems = prev.filter((cartItem) => cartItem.id !== id);
      setTotal(recalculateTotal(updatedItems));
      return updatedItems;
    });
  };

  // Recalculate the total price of the cart
  const recalculateTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Reset the cart to its initial state
  const resetCart = () => {
    setCartItems([]);
    setTotal(0);
    setDisplayCart(false);
  };

  return (
    <div className="container">
      {/* Render the shopping cart */}
      <Cart
        items={cartItems} 
        total={total}
        removeFromCart={removeFromCart} 
        toggleCart={toggleCart} 
      />
      {/* Render product cards */}
      <div className="row">
        {products.map(({ id, src, title, subtitle, price }) => (
          <div key={id} className="card-container col-md-3 mb-1">
            <Card
              image={src} 
              title={title} 
              subtitle={subtitle} 
              price={price} 
              quantityInCart={
                cartItems.find((item) => item.id === id)?.quantity || 0
              }
              onAddToCart={(quantity: number) =>
                addToCart({ id, title, price }, quantity)
              }
              onRemoveFromCart={() => removeFromCart(id)}
            />
          </div>
        ))}
      </div>
      {/* Render the Order component if the cart is visible */}
      <div>
        {displayCart && (
          <Order
            items={cartItems} 
            total={total}
            resetCart={resetCart} 
          />
        )}
      </div>
    </div>
  );
}

export default ParentComponent;