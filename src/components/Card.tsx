interface CardProps {
  imagen: string;
  titulo: string;
  subtitulo: string;
  precio: number;
  cantidadEnCarrito: number; // Quantity in cart
  onAddToCart: (cantidad: number) => void;
  onRemoveFromCart: () => void;
}

function Card({
  imagen,
  titulo,
  subtitulo,
  precio,
  cantidadEnCarrito,
  onAddToCart,
  onRemoveFromCart,
}: CardProps) {
  const enCarrito = cantidadEnCarrito > 0; // Determine if the item is in the cart

  const incrementar = () => {
    onAddToCart(cantidadEnCarrito + 1); // Increase quantity
  };

  const disminuir = () => {
    if (cantidadEnCarrito > 1) {
      onAddToCart(cantidadEnCarrito - 1); // Decrease quantity
    } else {
      onRemoveFromCart(); // Remove from cart completely
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
          <span>{cantidadEnCarrito}</span>
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
          onClick={() => onAddToCart(1)} // Add 1 to cart
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