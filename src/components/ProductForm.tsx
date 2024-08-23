import React, { useState, FormEvent, useEffect } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductForm: React.FC = () => {
  const {
    isFormOpen,
    productToEdit,
    handleFormSubmit,
    closeProductForm,
    products,
  } = useShoppingCart();
  const [formData, setFormData] = useState({
    id: 0,
    ProductName: "",
    ProductPrice: "",
    ProductUrl: "",
    ProductText: "",
  });

  useEffect(() => {
    if (productToEdit && isFormOpen) {
      setFormData({
        id: productToEdit.id,
        ProductName: productToEdit.ProductName,
        ProductPrice: productToEdit.ProductPrice.toString(),
        ProductUrl: productToEdit.ProductUrl,
        ProductText: productToEdit.ProductText,
      });
    } else if (!productToEdit && isFormOpen) {
      setFormData({
        id: 0,
        ProductName: "",
        ProductPrice: "",
        ProductUrl: "",
        ProductText: "",
      });
    }
  }, [productToEdit, isFormOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const updatedProductData = {
      id: productToEdit ? productToEdit.id : products.length + 1,
      ProductName: formData.ProductName,
      ProductUrl: formData.ProductUrl,
      ProductPrice: parseFloat(formData.ProductPrice),
      ProductText: formData.ProductText,
    };

    handleFormSubmit(updatedProductData);
    closeProductForm();
  };

  return (
    <Modal
      show={isFormOpen}
      onHide={closeProductForm}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {productToEdit ? "Edit Product" : "Add Product to Consider"}
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
                name="ProductName"
                onChange={handleInputChange}
                value={formData.ProductName}
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
                  name="ProductPrice"
                  onChange={handleInputChange}
                  value={formData.ProductPrice}
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter product URL"
                name="ProductUrl"
                onChange={handleInputChange}
                value={formData.ProductUrl}
                required
              />
            </div>
            <div className="form-group">
              <label>Detail</label>
              <textarea
                className="form-control"
                rows={3}
                name="ProductText"
                onChange={handleInputChange}
                value={formData.ProductText}
              ></textarea>
            </div>
          </div>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-end pt-5"
          >
            <Button type="submit" variant="outline-success">
              {productToEdit ? "Save Changes" : "Add Product"}
            </Button>
            <Button
              variant="outline-danger"
              onClick={closeProductForm}
              type="button"
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductForm;
