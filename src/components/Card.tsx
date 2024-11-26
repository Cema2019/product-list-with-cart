import { useState } from "react";

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

  // Función para agregar al carrito
  const addToCart = () => {
    setEnCarrito(true);
    onAddToCart(cantidad);  // Pass the current cantidad when added
  };

  const incrementar = () => {
    setCantidad((prevCantidad) => {
      const nuevaCantidad = prevCantidad + 1;
      onAddToCart(nuevaCantidad); // Call onAddToCart with updated cantidad
      return nuevaCantidad;
    });
  };

  // Función para disminuir la cantidad de la tarjeta
  const disminuir = () => {
    setCantidad((prevCantidad) => {
      const nuevaCantidad = Math.max(prevCantidad - 1, 1);  // Prevent going below 1
      return nuevaCantidad;
    });
    if (cantidad > 1) {
      onAddToCart(cantidad - 1);  // Only call if amount is greater than 1
    } else {
      setEnCarrito(false);
    }
  };

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
          className="btn-cart  btn btn-danger btn-sm"
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
