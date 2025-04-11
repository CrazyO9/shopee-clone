import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./pages/components/ScrollToTop";
import LogginPage from "./pages/LoginPage";
import { AuthProvider } from "./pages/components/auth/authContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/mall" replace />} />
          <Route path="/mall" element={<HomePage />} />
          <Route path="/login" element={<LogginPage />} />
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          <Route path="/:productName" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App