import imagenCarrito from "../assets/images/illustration-empty-cart.svg";

// Definición de la interfaz para los artículos del carrito
interface IArticuloCarrito {
  id: number;
  titulo: string;
  cantidad: number;
  precio: number;
}

// Definición de las propiedades del componente Carrito
interface ICarritoProps {
  articulos: IArticuloCarrito[]; // Lista de artículos en el carrito
  total: number; // Total acumulado de la compra
  eliminarDelCarrito: (id: number) => void; // Función para eliminar un artículo del carrito
}

function Carrito({ articulos, total, eliminarDelCarrito }: ICarritoProps) {
  return (
    <div className="carrito-container col-md-2 mb-1">
      <div className="carrito card mb-2">
        <div className="carrito-header">
          <h2 className="carrito-titulo">Tu Carrito</h2>
        </div>
        <div className="carrito-body card-body">
          {articulos.length === 0 ? (
            <div className="text-center">
              <img src={imagenCarrito} alt="Imagen carrito vacío" />
            </div>
          ) : (
            <div>
              <ul className="carrito-list list-group">
                {articulos.map((articulo) => (
                  <li
                    key={articulo.id}
                    className="carrito-item list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{articulo.titulo}</strong>
                      <div>
                        {articulo.cantidad} &times; @
                        {articulo.precio.toFixed(2)}
                      </div>
                    </div>
                    <span className="carrito badge bg-secondary rounded-pill">
                      ${articulo.precio * articulo.cantidad}
                    </span>

                    {/* Botón para eliminar el artículo */}
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => eliminarDelCarrito(articulo.id)}
                      style={{ marginLeft: "10px", fontSize: "16px" }}
                    >
                      &times; {/* El carácter '×' representa la cruz */}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="carrito-contenedor-total">
                <h3 className="carrito-total mt-3">Total de la Orden:</h3>
                <p className="carrito-precio">${total.toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;
