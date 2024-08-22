import React, { useState, FormEvent } from "react";
import { Button, Modal, Stack } from "react-bootstrap";

type ProductFormProps = {
  handleClose: () => void;
  isFormOpen: boolean;
  onSaveProduct: (product: {
    id: number;
    ProductName: string;
    ProductUrl: string;
    ProductPrice: number;
  }) => void;
  products: Array<{
    id: number;
    ProductName: string;
    ProductUrl: string;
    ProductPrice: number;
  }>;
};

const ProductForm: React.FC<ProductFormProps> = ({
  handleClose,
  isFormOpen,
  onSaveProduct,
  products,
}) => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductUrl, setProductUrl] = useState("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };

  const urlChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductUrl(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const newProductData = {
      id: products.length + 1,
      ProductName: ProductName,
      ProductUrl: ProductUrl,
      ProductPrice: parseFloat(ProductPrice),
    };

    onSaveProduct(newProductData);
    setProductName("");
    setProductPrice("");
    setProductUrl("");
  };

  return (
    <>
      <Modal
        show={isFormOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product to Consider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationServer01"
                  placeholder="Enter product name.."
                  onChange={titleChangeHandler}
                  value={ProductName}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      $
                    </span>
                  </div>
                  <input
                    className="form-control"
                    id="validationServer02"
                    type="number"
                    placeholder="Enter product price.."
                    onChange={priceChangeHandler}
                    value={ProductPrice}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationServer03"
                  placeholder="Enter product URL"
                  onChange={urlChangeHandler}
                  value={ProductUrl}
                  required
                />
              </div>
            </div>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-end"
            >
              <Button type="submit" variant="outline-success">
                Add Product
              </Button>
              <Button
                variant="outline-danger"
                onClick={handleClose}
                type="button"
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductForm;
