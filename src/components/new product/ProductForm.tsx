import React, { useState, FormEvent } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { Product } from "../../types";

type ProductFormProps = {
  handleClose: () => void;
  isFormOpen: boolean;
  onSaveProduct: (product: Product) => void;
  editProduct?: Product;
  products: Product[];
};

const ProductForm: React.FC<ProductFormProps> = ({
  handleClose,
  isFormOpen,
  onSaveProduct,
  editProduct,
  products,
}) => {
  const [ProductName, setProductName] = useState(
    editProduct?.ProductName || ""
  );
  const [ProductPrice, setProductPrice] = useState(
    (editProduct?.ProductPrice || 0).toString()
  );
  const [ProductUrl, setProductUrl] = useState(editProduct?.ProductUrl || "");
  const [ProductText, setProductText] = useState(
    editProduct?.ProductText || ""
  );

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

    const updatedProductData = {
      id: editProduct ? editProduct.id : products.length + 1,
      ProductName,
      ProductUrl,
      ProductPrice: parseFloat(ProductPrice),
      ProductText,
    };

    onSaveProduct(updatedProductData);
    handleClose();
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
          <Modal.Title>
            {editProduct ? "Edit Product" : "Add Product to Consider"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name.."
                  onChange={titleChangeHandler}
                  value={ProductName}
                  id="exampleFormControlInput1"
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter product price.."
                    onChange={priceChangeHandler}
                    value={ProductPrice}
                    id="exampleFormControlInput2"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product URL"
                  onChange={urlChangeHandler}
                  value={ProductUrl}
                  id="exampleFormControlInput3"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Detail</label>
                <textarea
                  className="form-control"
                  rows={3}
                  onChange={textChangeHandler}
                  value={ProductText}
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
            </div>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-end pt-5"
            >
              <Button type="submit" variant="outline-success">
                {editProduct ? "Save Changes" : "Add Product"}
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
