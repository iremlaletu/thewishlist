import { Button, Col, Row } from "react-bootstrap";
import transition from "../components/transition";
import { StoreItem } from "../components/StoreItem";
import ProductForm from "../components/ProductForm";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  const { products, handleAddProduct } = useShoppingCart();
  return (
    <>
      <h1>Your Store</h1>
      <Button
        onClick={handleAddProduct}
        variant="outline-secondary"
        className="p-5"
      >
        Add Product
      </Button>
      <div className="pt-5">
        <Row md={2} xs={1} lg={3} className="g-3">
          {products.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <ProductForm />
    </>
  );
};

export default transition(Store);
