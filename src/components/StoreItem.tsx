import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  ProductName: string;
  ProductPrice: number;
  ProductUrl: string;
  ProductText: string;
};

export function StoreItem({
  id,
  ProductName,
  ProductPrice,
  ProductUrl,
  ProductText,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={ProductUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-4 d-flex justify-content-between align-items-baseline">
          <span className="fs-2"> {ProductName} </span>
          <span className="ms-2 text-muted ">
            {formatCurrency(ProductPrice)}{" "}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              style={{ gap: ".5rem" }}
              className="d-flex align-items-center flex-column"
            >
              <div
                style={{ gap: ".5rem" }}
                className="d-flex align-items-center justify-content-center"
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3"> {quantity} </span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
          <div className="pt-2"> {ProductText} </div>
        </div>
      </Card.Body>
    </Card>
  );
}
