import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../contexts/ProductsContext';


const Shop = () => {
  const { products } = useContext(ProductsContext);
console.log('exec');
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;