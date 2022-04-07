import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Header from './routes/Header.jsx';
import Authentication from './routes/Authentication.jsx';
import Shop from './routes/Shop.jsx';
import Checkout from './routes/CheckOut.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;