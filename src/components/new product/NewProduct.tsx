import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NewProduct = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { addProduct, products } = useShoppingCart();
  const handleSaveProduct = (newProductData: {
    id: number;
    ProductName: string;
    ProductUrl: string;
    ProductPrice: number;
  }) => {
    addProduct(newProductData); // Context işlevini çağırıyoruz
  };

  return (
    <div>
      {isFormOpen ? (
        <ProductForm
          setIsFormOpen={setIsFormOpen}
          onSaveProduct={handleSaveProduct}
          products={products}
        />
      ) : (
        <AddProduct setIsFormOpen={setIsFormOpen} />
      )}
    </div>
  );
};

export default NewProduct;
