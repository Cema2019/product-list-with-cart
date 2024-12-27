import { Dialog, DialogActions, Box, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

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
      <CheckCircleOutlinedIcon 
        style={{ 
          position: 'absolute',
          left: 20,
          top: 10,
          color: 'green',
          fontSize: '2rem' 
        }} />
      <DialogTitle sx={{
        mt: 3,
        fontSize: '2rem', 
        fontWeight: 'bold', 
        paddingBottom: 0,
        }}
      >
      Order Confirmed
      </DialogTitle>
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
      </DialogContent>
      <DialogActions>
        <Button 
            variant="contained" 
            color="error" 
            onClick={resetCart}            
            sx={{
                textTransform: 'none', 
                borderRadius: '20px', 
                width: '90%', 
                margin: '0 auto',}}
            >
          Start New Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Order;
