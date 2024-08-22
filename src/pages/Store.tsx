import { Col, Row } from "react-bootstrap";
import transition from "../components/transition";
import { StoreItem } from "../components/StoreItem";
import NewProduct from "../components/new product/NewProduct";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  const { products } = useShoppingCart();
  return (
    <>
      <h1>Your Store</h1>
      <NewProduct />
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default transition(Store);
