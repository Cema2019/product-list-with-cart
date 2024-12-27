import { Card as MUI_Card, CardContent, Box, Button, Typography, IconButton } from "@mui/material";
import { 
  AddCircleOutline as Add, 
  RemoveCircleOutline as Remove, 
  AddShoppingCart as AddShoppingCartIcon 
} from "@mui/icons-material";

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
        height: "100%", 
        padding: "16px", 
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px", 
          objectFit: "cover", 
          borderRadius: "4px", 
          border: isInCart ? "2px solid darkred" : 'none'
        }}
      />
      <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {isInCart ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
            onClick={() => onAddToCart(1)}
            sx={{ 

              gap: 2, 
              textTransform: 'none', 
              borderRadius: '20px',
              color: 'black',
              backgroundColor: "white", 
              fontWeight: 'bold',
              border: "2px solid black",
            }} 
          >
            <AddShoppingCartIcon sx={{color: 'darkred' }}/>
            Add to Cart
          </Button>
        )}
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
            lineHeight: 1.2, 
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
      </CardContent>
    </MUI_Card>
  );
}

export default Card;
