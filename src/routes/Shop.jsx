import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './CategoriesPreview.jsx';
import Category from './Category.jsx';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;