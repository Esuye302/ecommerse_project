import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";
const App = () => {
  return (
    <>
      <title>ecommerse_project</title>

      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
};

export default App;
