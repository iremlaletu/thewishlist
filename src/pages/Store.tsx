import { Button, Col, Row, Stack } from "react-bootstrap";
import transition from "../components/transition";
import { StoreItem } from "../components/StoreItem";
import ProductForm from "../components/ProductForm";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  const { products, handleAddProduct, toggleExplanation, showExplanation } =
    useShoppingCart();
  //console.log("Current products:", products);
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
          <p>Here's how you can use this site:</p>
          <ul>
            <li>Browse the products on your wish list.</li>
            <li>
              Click "Add Product" to set them to the store. Use the "Add to
              Cart" button to add products to your cart if you're certain.
            </li>

            <li>
              Click on the cart icon to view your selected items, check your
              total and compare with your budget.
            </li>
            <li>You can also edit or remove products if needed.</li>
            <li>
              Collect all your favorites in one place, helping easily compare
              prices, keep track of your planned purchases, and monitor your
              total spending.
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
