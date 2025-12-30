import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count > 1 ? state.count - 1 : 1 };

    default:
      return state;
  }
}

function Carts({ cart, setCart }) {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  const totalPrice = cart.reduce((total, item) => total + (item.Price * state.count),0);

  return (
    <div className="hmain">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <Card key={index} className="cart-item">
                  <div className="itm1">
                  <Card.Img variant="top" src={item.Image} className="cart-image" />

                  <div className="current">
                      <h5>${item.Price}</h5>
                    </div>

                  <div className="foot">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch({ type: "decrement" })}
                      >
                        -
                      </button>
                      <span className="quantity">{state.count}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch({ type: "increment" })}
                      >
                        +
                      </button>
                      
                    </div>
                    </div>
                    
                    <div className="total">
                      ${item.Price * state.count}
                    </div>
                      
                
                  
                  </div>

                  <Card.Body>
                    <Card.Title className="item-title">{item.Name}</Card.Title>
                    {/* <Card.Text className="item-price">${item.Price * state.count}</Card.Text> */}
                  </Card.Body>
                      <Tooltip title="Delete">
                      <IconButton
                        className="delete-btn"
                        onClick={() =>
                          setCart(cart.filter((_,i) => i !== index)) } >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                </Card>
              ))}
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Carts;
