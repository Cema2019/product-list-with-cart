import { Card as MUI_Card, CardContent, Box, Button, Typography, IconButton } from "@mui/material";
import { Add, Remove, AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material";

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
    <MUI_Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Ensure all cards are the same height
        padding: "16px", // Add padding around the content
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px", // Fixed height for consistency
          objectFit: "cover", // Maintain image aspect ratio
          borderRadius: "4px", // Optional: Add rounded corners
        }}
      />
      <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{ marginBottom: "8px" }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            marginBottom: "8px",
            lineHeight: 1.2, // Ensure consistent spacing between lines
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ 
            marginBottom: "16px",
            color: "darkred",
            fontWeight: 'bold' }}
        >
          ${price.toFixed(2)}
        </Typography>
        {isInCart ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "auto", // Push buttons to the bottom
              color: 'white',
              backgroundColor: 'darkred',
              borderRadius: '20px',
            }}
          >
            <IconButton onClick={decrement} sx={{ color: "white" }}>
              <Remove />
            </IconButton>
            <Typography>{quantityInCart}</Typography>
            <IconButton onClick={increment} sx={{ color: "white" }}>
              <Add />
            </IconButton>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAddToCart(1)}
            sx={{ marginTop: "auto", gap: 2 }} 
          >
            <AddShoppingCartIcon />
            Add to Cart
          </Button>
        )}
      </CardContent>
    </MUI_Card>
  );
}

export default Card;
