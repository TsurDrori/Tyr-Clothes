const CartItem = ({ cartItem }) => {
  // const { imageUrl, price, name, quantity } = cartItem;
console.log('cartItem', cartItem);
  return (
    <div className='cart-item-container'>
      <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      <div className='item-details'>
        <span className='name'>{cartItem.name}</span>
        <span className='price'>
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;