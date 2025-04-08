import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./pages/components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/mall" replace />} />
        <Route path="/mall" element={<HomePage />} />
        <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route path="/:productName" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App