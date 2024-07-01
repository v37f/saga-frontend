import MainPage from 'src/pages/MainPage/MainPage';
import ArtistsPage from 'src/pages/ArtistsPage/ArtistsPage';
import CartPage from 'src/pages/CartPage/CartPage';
import CatalogPage from 'src/pages/CatalogPage/CatalogPage';
import ConsultationPage from 'src/pages/ConsultationPage/ConsultationPage';
import CustomerProfilePage from 'src/pages/CustomerProfilePage/CustomerProfilePage';
import NewsPage from 'src/pages/NewsPage/NewsPage';
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage';
import PlaceOrderPage from 'src/pages/PlaceOrderPage/PlaceOrderPage';
import PriceAnalyticsPage from 'src/pages/PriceAnalyticsPage/PriceAnalyticsPage';

import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  ARTISTS_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  CONSULTATION_ROUTE,
  CUSTOMER_PROFILE_ROUTE,
  DEFAULT_ROUTE,
  NEWS_ROUTE,
  NOT_FOUND_ROUTE,
  PLACE_ORDER_ROUTE,
  PRICE_ANALYTICS_ROUTE,
} from 'src/utils/constants';
import ProductPage from 'src/pages/ProductPage/ProductPage';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route index path={DEFAULT_ROUTE} element={<MainPage />} />
      <Route path={CATALOG_ROUTE} element={<CatalogPage />} />
      <Route path={CATALOG_ROUTE + '/:id'} element={<ProductPage />} />
      <Route path={ARTISTS_ROUTE} element={<ArtistsPage />} />
      <Route path={NEWS_ROUTE} element={<NewsPage />} />
      <Route
        path={CONSULTATION_ROUTE}
        element={
          <ProtectedRoute>
            <ConsultationPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={PRICE_ANALYTICS_ROUTE}
        element={
          <ProtectedRoute>
            <PriceAnalyticsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={CUSTOMER_PROFILE_ROUTE + '/*'}
        element={
          <ProtectedRoute>
            <CustomerProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path={CART_ROUTE} element={<CartPage />} />
      <Route path={PLACE_ORDER_ROUTE} element={<PlaceOrderPage />} />
      <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default CustomerRoutes;
