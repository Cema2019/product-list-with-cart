import { Card, CardContent, Typography, Button, Badge } from '@mui/material';

type OrderProps = {
  items: { title: string; quantity: number; price: number }[];
  total: number;
  resetCart: () => void;
};

function Order({ items, total, resetCart }: OrderProps) {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order Confirmed
          </Typography>
          <Typography variant="body1" paragraph>
            We hope you enjoy your food!
          </Typography>

          {items.map(({ title, quantity, price }, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <Typography variant="body1" component="strong">
                {title}
              </Typography>
              <Typography variant="body2">
                {quantity} × @{price.toFixed(2)}
              </Typography>
            </div>
          ))}

          <Badge
            badgeContent={`$${total.toFixed(2)}`}
            color="secondary"
            style={{ display: 'block', marginTop: '20px' }}
          >
            <Typography variant="h6">Order Total</Typography>
          </Badge>

          <Button
            variant="contained"
            color="error"
            fullWidth
            style={{ marginTop: '20px' }}
            onClick={resetCart}
          >
            Start New Order
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Order;
