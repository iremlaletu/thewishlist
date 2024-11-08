import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { AnimatePresence } from "framer-motion";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
