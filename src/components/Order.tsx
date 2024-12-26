import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Badge } from '@mui/material';

type OrderProps = {
  items: { title: string; quantity: number; price: number }[];
  total: number;
  resetCart: () => void;
  open: boolean;  // Controls if the modal is open
  handleClose: () => void;  // Function to close the modal
};

function Order({ items, total, resetCart, open, handleClose }: OrderProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Order Confirmed</DialogTitle>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button 
            variant="contained" 
            color="error" 
            onClick={resetCart}
            sx={{textTransform: 'none'}}
            >
          Start New Order
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={handleClose} 
          sx={{textTransform: 'none'}}
          >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Order;
