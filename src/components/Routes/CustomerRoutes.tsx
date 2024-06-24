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

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/artists" element={<ArtistsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/consultation" element={<ConsultationPage />} />
      <Route path="/priceanalytics" element={<PriceAnalyticsPage />} />
      <Route path="/profile" element={<CustomerProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/placeorder" element={<PlaceOrderPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default CustomerRoutes;
