import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import SellerProfilePage from 'src/pages/SellerProfilePage/SellerProfilePage';
import SellerGoodsPage from 'src/pages/SellerGoodsPage/SellerGoodsPage';
import SellerOrdersPage from 'src/pages/SellerOrdersPage/SellerOrdersPage';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<SellerProfilePage />} />
      <Route path="/goods" element={<SellerGoodsPage />} />
      <Route path="/orders" element={<SellerOrdersPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default SellerRoutes;
