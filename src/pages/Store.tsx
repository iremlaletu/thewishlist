import { Button, Col, Row, Stack } from "react-bootstrap";
import transition from "../components/transition";
import { StoreItem } from "../components/StoreItem";
import ProductForm from "../components/ProductForm";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

const Store = () => {
  const { products, handleAddProduct } = useShoppingCart();
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation((prev) => !prev);
  };

  return (
    <>
      <h1>Your Store</h1>
      <Stack direction="horizontal" gap={3} className="pt-5">
        <Button
          onClick={toggleExplanation}
          variant="outline-info"
          className="p-5"
        >
          Usage Idea
        </Button>
        <Button
          onClick={handleAddProduct}
          variant="outline-secondary"
          className="p-5"
        >
          Add Product
        </Button>
      </Stack>

      {showExplanation && (
        <div className="mt-3">
          <p>Here’s how you can use this site:</p>
          <ul>
            <li>Browse the products on your wish list.</li>
            <li>
              Click "Add Product" to add them to the store. Use the "Add to
              Cart" button to add products to your cart if you're certain.
            </li>

            <li>
              Click on the cart icon to view your selected items, check your
              total and compare with your budget.
            </li>
            <li>You can also edit or remove products if needed.</li>
            <li>
              Gather all your selected items in one place for managing your
              shopping desires across multiple websites. This way, you can
              easily compare prices, track your planned purchases, and keep a
              running total of how much you'll spend
            </li>
          </ul>
        </div>
      )}

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
