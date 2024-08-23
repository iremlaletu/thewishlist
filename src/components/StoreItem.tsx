import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../types";
import { useState } from "react";
import ProductForm from "./new product/ProductForm";

export function StoreItem(product: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    updateProduct,
    products,
  } = useShoppingCart();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedProduct: Product) => {
    updateProduct(updatedProduct);
    setIsEditing(false);
  };

  const quantity = getItemQuantity(product.id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.ProductUrl}
          height="300px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-4 d-flex justify-content-between align-items-baseline">
            <span className="fs-2"> {product.ProductName} </span>
            <span className="ms-2 text-muted ">
              {formatCurrency(product.ProductPrice)}{" "}
            </span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(product.id)}
              >
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
                  <Button onClick={() => decreaseCartQuantity(product.id)}>
                    -
                  </Button>
                  <div>
                    <span className="fs-3"> {quantity} </span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(product.id)}>
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </div>
            )}
            <div className="pt-2 pb-2"> {product.ProductText} </div>
            <Button
              variant="outline-warning"
              onClick={() => setIsEditing(true)}
            >
              Edit Product
            </Button>
          </div>
        </Card.Body>
      </Card>
      {isEditing && (
        <ProductForm
          handleClose={() => setIsEditing(false)}
          isFormOpen={isEditing}
          onSaveProduct={handleEdit}
          editProduct={product}
          products={products}
        />
      )}
    </>
  );
}
