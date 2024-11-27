import { useState } from "react";
import Carrito from "./Carrito";
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

type ArticuloCarrito = {
  id: number;
  titulo: string;
  cantidad: number;
  precio: number;
};

function ParentComponent() {
  const productos = [
    { id: 1, src: logoproducto1, titulo: "Waffle with Berries", subtitle: "Waffle", price: 6.5 },
    { id: 2, src: logoproducto2, titulo: "Vanilla Bean Creme Brulée", subtitle: "Creme Brulée", price: 7.0 },
    { id: 3, src: logoproducto3, titulo: "Macaron Mix of Five", subtitle: "Macaron", price: 8.0 },
    { id: 4, src: logoproducto4, titulo: "Classic Tiramisu", subtitle: "Tiramisu", price: 5.5 },
    { id: 5, src: logoproducto5, titulo: "Pistachio Baklava", subtitle: "Baklava", price: 4.0 },
    { id: 6, src: logoproducto6, titulo: "Lemon Meringue Pie", subtitle: "Pie", price: 5.0 },
    { id: 7, src: logoproducto7, titulo: "Red Velvet Cake", subtitle: "Cake", price: 4.5 },
    { id: 8, src: logoproducto8, titulo: "Salted Caramel Brownie", subtitle: "Brownie", price: 5.5 },
    { id: 9, src: logoproducto9, titulo: "Vanilla Panna Cotta", subtitle: "Panna Cotta", price: 6.5 },
  ];

  const [articulosCarrito, setArticulosCarrito] = useState<ArticuloCarrito[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Toggle the cart visibility
  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Add or update an item in the cart
  const agregarAlCarrito = (articulo: { id: number; titulo: string; precio: number }, cantidad: number) => {
    setArticulosCarrito((prev) => {
      const articuloExistente = prev.find((item) => item.id === articulo.id);

      if (articuloExistente) {
        // Update the quantity of the existing item
        articuloExistente.cantidad = cantidad;
      } else {
        // Add a new item to the cart
        prev.push({ ...articulo, cantidad });
      }

      setTotal(recalcularTotal(prev));
      return [...prev];
    });
  };

  // Remove an item from the cart
  const eliminarDelCarrito = (id: number) => {
    setArticulosCarrito((prev) => {
      const articulosActualizados = prev.filter((articuloCarrito) => articuloCarrito.id !== id);
      setTotal(recalcularTotal(articulosActualizados));
      return articulosActualizados;
    });
  };

  // Recalculate the total price of the cart
  const recalcularTotal = (articulos: ArticuloCarrito[]): number => {
    return articulos.reduce((acumulador, articulo) => acumulador + articulo.precio * articulo.cantidad, 0);
  };

  // Reset the cart to its initial state
  const reiniciarCarrito = () => {
    setArticulosCarrito([]);
    setTotal(0);
    setMostrarCarrito(false);
  };

return (
    <div className="container">
      {/* Render the shopping cart */}
      <Carrito
        articulos={articulosCarrito}
        total={total}
        eliminarDelCarrito={eliminarDelCarrito}
        toggleCarrito={toggleCarrito}
      />
      {/* Render product cards */}
      <div className="row">
        {productos.map(({ id, src, titulo, subtitle, price }) => (
          <div key={id} className="card-contenedor col-md-3 mb-1">
            <Card
              imagen={src}
              titulo={titulo}
              subtitulo={subtitle}
              precio={price}
              cantidadEnCarrito={
                articulosCarrito.find((item) => item.id === id)?.cantidad || 0
              }
              onAddToCart={(cantidad: number) =>
                agregarAlCarrito({ id, titulo, precio: price }, cantidad)
              }
              onRemoveFromCart={() => eliminarDelCarrito(id)}
            />
          </div>
        ))}
      </div>
      {/* Render the Order component if the cart is visible */}
      <div>
        {mostrarCarrito && (
          <Order
            articulos={articulosCarrito}
            total={total}
            reiniciarCarrito={reiniciarCarrito}
          />
        )}
      </div>
    </div>
  );
}

export default ParentComponent;