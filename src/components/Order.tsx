import {
  Dialog,
  DialogActions,
  Box,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

type OrderProps = {
  items: { title: string; quantity: number; price: number }[];
  total: number;
  resetCart: () => void;
  open: boolean; // Controls if the modal is open
  handleClose: () => void; // Function to close the modal
};

function Order({ items, total, resetCart, open, handleClose }: OrderProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <CheckCircleOutlinedIcon
        style={{
          position: "absolute",
          left: 20,
          top: 10,
          color: "green",
          fontSize: "2rem",
        }}
      />
      <DialogTitle
        sx={{
          mt: 5,
          fontSize: "2rem",
          fontWeight: "bold",
          paddingBottom: 0,
        }}
      >
        Order Confirmed
      </DialogTitle>
      <Typography variant="body1" paragraph sx={{ px: 3 }}>
        We hope you enjoy your food!
      </Typography>
      <DialogContent>
        {items.map(({ title, quantity, price }, index) => (
          <Box key={index} style={{ marginBottom: "10px" }}>
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">
                <span style={{ color: "darkred", marginRight: "10px" }}>{quantity}×</span>@
                {price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", ml: "auto" }}
              >
                ${(quantity * price).toFixed(2)}
              </Typography>
            </div>
          </Box>
        ))}
      </DialogContent>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography variant="subtitle1">Order Total</Typography>
        <Typography variant="h6" fontWeight="bold">
          ${total.toFixed(2)}
        </Typography>
      </Box>
      <DialogActions>
        <Button
          variant="contained"
          onClick={resetCart}
          sx={{
            textTransform: "none",
            backgroundColor: "darkred",
            borderRadius: "20px",
            width: "90%",
            margin: "0 auto",
            mb: 3,
          }}
        >
          Start New Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Order;
