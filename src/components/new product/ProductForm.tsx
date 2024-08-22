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
    ProductText: string;
  }) => void;
  products: Array<{
    id: number;
    ProductName: string;
    ProductUrl: string;
    ProductPrice: number;
    ProductText: string;
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
  const [ProductText, setProductText] = useState("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };

  const urlChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductUrl(e.target.value);
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductText(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const newProductData = {
      id: products.length + 1,
      ProductName: ProductName,
      ProductUrl: ProductUrl,
      ProductPrice: parseFloat(ProductPrice),
      ProductText: ProductText,
    };

    onSaveProduct(newProductData);
    setProductName("");
    setProductPrice("");
    setProductUrl("");
    setProductText("");
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
                  id="exampleFormControlInput1"
                  placeholder="Enter product name.."
                  onChange={titleChangeHandler}
                  value={ProductName}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="exampleFormControlInput2"
                    >
                      $
                    </span>
                  </div>
                  <input
                    className="form-control"
                    id="exampleFormControlInput3"
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
                  id="exampleFormControlInput4"
                  placeholder="Enter product URL"
                  onChange={urlChangeHandler}
                  value={ProductUrl}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Detail</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  onChange={textChangeHandler}
                  value={ProductText}
                ></textarea>
              </div>
            </div>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-end pt-5"
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
