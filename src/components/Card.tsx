import React from "react";

interface CardProps {
  image: string; 
  title: string; 
  subtitle: string; 
  price: number; 
  quantityInCart: number; 
  onAddToCart: (quantity: number) => void; 
  onRemoveFromCart: () => void; 
}

function Card({
  image,
  title,
  subtitle,
  price,
  quantityInCart,
  onAddToCart,
  onRemoveFromCart,
}: CardProps) {
  const isInCart = quantityInCart > 0; 

  const increment = () => {
    onAddToCart(quantityInCart + 1); 
  };

  const decrement = () => {
    if (quantityInCart > 1) {
      onAddToCart(quantityInCart - 1); 
    } else {
      onRemoveFromCart(); 
    }
  };

  return (
    <div className="card">
      <img className="card-image" src={image} alt="product" /> 
      {isInCart ? (
        <div className="card-buttons">
          <button
            className="btn-cart-decrement btn btn-outline-danger btn-sm"
            onClick={decrement}
          >
            -
          </button>
          <span>{quantityInCart}</span>
          <button
            className="btn-cart-increment btn btn-outline-danger btn-sm"
            onClick={increment}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="btn-cart btn btn-danger btn-sm"
          onClick={() => onAddToCart(1)} // Add 1 to cart
        >
          Add to Cart
        </button>
      )}

      <div className="card-body">
        <h5 className="card-subtitle">{subtitle}</h5> 
        <h5 className="card-title">{title}</h5> 
        <h5 className="card-price">$ {price.toFixed(2)}</h5> 
      </div>
    </div>
  );
}

export default Card;