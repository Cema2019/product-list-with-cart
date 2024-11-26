import imagenCarrito from "../assets/images/illustration-empty-cart.svg";

// Interface for cart items
type ArticuloCarrito = {
  id: number;
  titulo: string;
  cantidad: number;
  precio: number;
};

// Props for the Carrito component
type Props = {
  articulos: ArticuloCarrito[]; // List of items in the cart
  total: number; // Total price
  eliminarDelCarrito: (id: number) => void; // Function to remove an item
  toggleCarrito: () => void; // Function to confirm the order
};

function Carrito({ articulos, total, eliminarDelCarrito, toggleCarrito }: Props) {
  return (
    <div className="carrito-container col-md-2 mb-1">
      <div className="carrito card mb-2">
        <div className="carrito-header">
          <h2 className="carrito-titulo">Your cart</h2>
        </div>
        <div className="carrito-body card-body">
          {articulos.length === 0 ? (
            <div className="text-center">
              <img src={imagenCarrito} alt="Imagen carrito vacío" />
            </div>
          ) : (
            <div>
              <ul className="carrito-list list-group">
                {articulos.map(({ id, titulo, cantidad, precio }) => (
                  <li
                    key={id}
                    className="carrito-item list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{titulo}</strong>
                      <div>
                        {cantidad} &times; @{precio.toFixed(2)}
                      </div>
                    </div>
                    <span className="carrito badge bg-secondary rounded-pill">
                      ${precio * cantidad}
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => eliminarDelCarrito(id)}
                      style={{ marginLeft: "10px", fontSize: "16px" }}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
              <div className="carrito-contenedor-total">
                <h3 className="carrito-total mt-3">Order total</h3>
                <p className="carrito-precio">${total.toFixed(2)}</p>
              </div>
              <div>
                <button
                  className="btn-cart btn btn-danger btn-sm"
                  onClick={toggleCarrito}
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

export default Carrito;
