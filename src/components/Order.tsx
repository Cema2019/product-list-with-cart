import React from "react";

// Define the props for the Order component
type OrderProps = {
    items: { title: string; quantity: number; price: number }[];
    total: number;
    resetCart: () => void;  // Renamed from "reiniciarCarrito"
};

function Order({ items, total, resetCart }: OrderProps) {
    return (
        <div className="order-container">
            <div className="card shadow-sm">
                <div className="order-header">
                    <h3>Order Confirmed</h3>
                </div>
                <div className="order-body">
                    <p>We hope you enjoy your food!</p>
                    {items.map(({ title, quantity, price }, index) => (
                        <div key={index}>
                            <strong>{title}</strong>
                            <p>{quantity} &times; @{price.toFixed(2)}</p>
                        </div>
                    ))}
                    <span className="cart badge bg-secondary rounded-pill">
                       Order total ${total.toFixed(2)}
                    </span>
                </div>
                <button className="btn-cart btn btn-danger btn-sm btn-order" onClick={resetCart}>
                    Start New Order
                </button>
            </div>
        </div>
    );
}

export default Order;
