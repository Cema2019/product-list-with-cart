type OrderProps = {
    articulos: { titulo: string; cantidad: number; precio: number }[];
    total: number;
    reiniciarCarrito: () => void;  // Función para reiniciar el carrito
};

function Order({ articulos, total, reiniciarCarrito }: OrderProps) {
    return (
        <div className="order-container">
            <div className="card shadow-sm">
                <div className="order-header">
                    <h3>Order Confirmed</h3>
                </div>
                <div className="order-body">
                    <p>We hope you enjoy your food!</p>
                    {articulos.map(({ titulo, cantidad, precio }, index) => (
                        <div key={index}>
                            <strong>{titulo}</strong>
                            <p>{cantidad} &times; @{precio.toFixed(2)}</p>
                        </div>
                    ))}
                    <span className="carrito badge bg-secondary rounded-pill">
                       Order total ${total.toFixed(2)}
                    </span>
                </div>
                <button className="btn-cart btn btn-danger btn-sm btn-order" onClick={reiniciarCarrito}>
                    Start New Order
                </button>
            </div>
        </div>
    );
}

export default Order;
