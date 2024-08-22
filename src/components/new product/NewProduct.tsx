import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NewProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClose = () => setIsFormOpen(false);
  const handleShow = () => setIsFormOpen(true);
  const { addProduct, products } = useShoppingCart();
  const handleSaveProduct = (newProductData: {
    id: number;
    ProductName: string;
    ProductUrl: string;
    ProductPrice: number;
  }) => {
    addProduct(newProductData); // Context
  };

  return (
    <div>
      {
        <>
          <ProductForm
            onSaveProduct={handleSaveProduct}
            products={products}
            handleClose={handleClose}
            isFormOpen={isFormOpen}
          />
          <AddProduct handleShow={handleShow} />
        </>
      }
    </div>
  );
};

export default NewProduct;
