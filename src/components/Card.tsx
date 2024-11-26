import { useState, useEffect } from "react";

interface CardProps {
  imagen: string;
  titulo: string;
  subtitulo: string;
  precio: number;
  onAddToCart: (cantidad: number) => void;
}

function Card({ imagen, titulo, subtitulo, precio, onAddToCart }: CardProps) {
  const [enCarrito, setEnCarrito] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  // Add the item to the cart and set its initial state
  const addToCart = () => {
    setEnCarrito(true);
    onAddToCart(cantidad);
  };

  // Increment the quantity
  const incrementar = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  // Decrease the quantity or remove from cart if quantity becomes 1
  const disminuir = () => {
    setCantidad((prevCantidad) => {
      const nuevaCantidad = Math.max(prevCantidad - 1, 1);
      if (nuevaCantidad === 1) setEnCarrito(false); // Remove from cart
      return nuevaCantidad;
    });
  };

  // Synchronize cart whenever `cantidad` changes and item is in cart
  useEffect(() => {
    if (enCarrito) {
      onAddToCart(cantidad);
    }
  }, [cantidad, enCarrito, onAddToCart]);

  return (
    <div className="card">
      <img className="card-imagen" src={imagen} alt="producto" />
      {enCarrito ? (
        <div className="card-botones">
          <button
            className="btn-cart-decremento btn btn-outline-danger btn-sm"
            onClick={disminuir}
          >
            -
          </button>
          <span>{cantidad}</span>
          <button
            className="btn-cart-incremento btn btn-outline-danger btn-sm"
            onClick={incrementar}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="btn-cart btn btn-danger btn-sm"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
      <div className="card-body">
        <h5 className="card-subtitulo">{subtitulo}</h5>
        <h5 className="card-titulo">{titulo}</h5>
        <h5 className="card-precio">$ {precio.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default Card;
