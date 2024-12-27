import { Box, Card, CardContent, Typography, List, ListItem, Button, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";

// Interface for cart items
type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

// Props for the Cart component
type Props = {
  items: CartItem[];
  total: number;
  removeFromCart: (id: number) => void;
  toggleCart: () => void;
};

function Cart({ items, total, removeFromCart, toggleCart }: Props) {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Card sx={{ width: "100%", p: 2 }}>
      <CardContent>
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{ color: 'darkred', fontWeight: 'bold' }}
          >
          Your Cart ({totalQuantity})
        </Typography>
        {items.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <img src={emptyCartImage} alt="Empty cart" style={{ width: "80%", maxWidth: "200px" }} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Your added items will appear here
            </Typography>
          </Box>
        ) : (
          <List>
            {items.map(({ id, title, quantity, price }) => (
              <ListItem
                key={id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                  p: 1,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                }}
              >
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography variant="body2">
                    {quantity} × ${price.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    ${(quantity * price).toFixed(2)}
                  </Typography>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => removeFromCart(id)}
                  >
                    <Close />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
            <Box sx={{ 
                  mt: 2, 
                  display: "flex",
                  justifyContent: "space-between", }}
                  >
              <Typography variant="subtitle1">Order Total</Typography>
              <Typography variant="h6" fontWeight="bold">
                ${total.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ 
                mt: 2, 
                backgroundColor: 'darkred', 
                borderRadius: '20px', 
                textTransform: 'none' }}
              onClick={toggleCart}
            >
              Confirm Order
            </Button>
          </List>
        )}
      </CardContent>
    </Card>
  );
}

export default Cart;
