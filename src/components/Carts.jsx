import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Carts({ cart, setCart }) {
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const updateQuantity = (index, change) => {
    setQuantities(prev => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(1, newQuantities[index] + change);
      return newQuantities;
    });
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    setQuantities(quantities.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item, index) => total + (item.Price * quantities[index]), 0);

  const handleCheckout = () => {
    alert(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
    setCart([]);
    setQuantities([]);
  };

  return (
    <div className="hmain">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Add some cars to get started!</p>
            <p>Explore our premium collection of luxury vehicles.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <Card key={index} className="cart-item animate-fade-in">
                  <div className="itm1">
                    <Card.Img variant="top" src={item.Image} className="cart-image" />
                    <div className="current">
                      <h5>${item.Price}</h5>
                    </div>
                  </div>

                  <div className="foot">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                      <span className="quantity">{quantities[index]}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="total">
                      ${(item.Price * quantities[index]).toFixed(2)}
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title className="item-title">{item.Name}</Card.Title>
                    <Card.Text className="item-description">{item.About}</Card.Text>
                  </Card.Body>
                  <Tooltip title="Remove from cart">
                    <IconButton
                      className="delete-btn"
                      onClick={() => removeItem(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Card>
              ))}
            </div>

            <div className="cart-summary animate-slide-up">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <Button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carts;
