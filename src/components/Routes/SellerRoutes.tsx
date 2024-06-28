import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import SellerProfilePage from 'src/pages/SellerProfilePage/SellerProfilePage';
import SellerGoodsPage from 'src/pages/SellerGoodsPage/SellerGoodsPage';
import SellerOrdersPage from 'src/pages/SellerOrdersPage/SellerOrdersPage';
import {
  DEFAULT_ROUTE,
  NOT_FOUND_ROUTE,
  SELLER_GOODS_ROUTE,
  SELLER_ORDERS_ROUTE,
} from 'src/utils/constants';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route index path={DEFAULT_ROUTE} element={<SellerProfilePage />} />
      <Route path={SELLER_GOODS_ROUTE} element={<SellerGoodsPage />} />
      <Route path={SELLER_ORDERS_ROUTE} element={<SellerOrdersPage />} />
      <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default SellerRoutes;
