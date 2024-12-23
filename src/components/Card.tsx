import { Card as MUI_Card, CardContent, Button, Typography, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

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
    <MUI_Card>
      <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${price.toFixed(2)}
        </Typography>
        {isInCart ? (
          <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            <IconButton onClick={decrement} color="secondary">
              <Remove />
            </IconButton>
            <Typography>{quantityInCart}</Typography>
            <IconButton onClick={increment} color="secondary">
              <Add />
            </IconButton>
          </div>
        ) : (
          <Button variant="contained" color="primary" onClick={() => onAddToCart(1)} style={{ marginTop: "8px" }}>
            Add to Cart
          </Button>
        )}
      </CardContent>
    </MUI_Card>
  );
}

export default Card;
