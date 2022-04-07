import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.jsx'
import Button from './Button';
import { CartContext } from '../contexts/CartContext.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  <Link className='nav-link' to='/shop'>
    SHOP
  </Link>
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Link to='/checkout'>
        <Button>CHECKOUT</Button>
      </Link>

    </div>
  );
};

export default CartDropdown;