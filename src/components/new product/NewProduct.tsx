import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Product } from "../../types";

const NewProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClose = () => setIsFormOpen(false);
  const handleShow = () => setIsFormOpen(true);
  const { addProduct, products } = useShoppingCart();

  const handleSaveProduct = (newProductData: Product) => {
    addProduct(newProductData);
  };

  return (
    <div>
      <ProductForm
        onSaveProduct={handleSaveProduct}
        handleClose={handleClose}
        isFormOpen={isFormOpen}
        products={products}
      />
      <AddProduct handleShow={handleShow} />
    </div>
  );
};

export default NewProduct;
