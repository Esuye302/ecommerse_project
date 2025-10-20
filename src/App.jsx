import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
const App = () => {
  return (
    <>
      <title>ecommerse_project</title>

      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Routes>
    </>
  );
};

export default App;
