import React, { useState, FormEvent } from "react";

type ProductFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsFormOpen,
  onSaveProduct,
  products,
}) => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductUrl, setProductUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
    setIsValid(e.target.value.trim().length > 0);
  };

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value);
  };

  const urlChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductUrl(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (ProductName.trim().length === 0) {
      setIsValid(false);
      return;
    }

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
    setIsValid(true);
  };

  return (
    <form onSubmit={submitHandler} className="">
      <div className="">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name.."
          onChange={titleChangeHandler}
          value={ProductName}
          className={` ${isValid ? "border-black" : "border-red-500"}`}
        />
      </div>
      <div className="">
        <label>Product Price $</label>
        <input
          type="number"
          placeholder="Enter product price.."
          onChange={priceChangeHandler}
          value={ProductPrice}
          className=""
        />
      </div>
      <div className="">
        <label>Product Image</label>
        <input
          type="text"
          placeholder="Enter product URL"
          onChange={urlChangeHandler}
          value={ProductUrl}
          className=""
        />
      </div>
      <div className="">
        <button className="">Add Product</button>
        <button className="" onClick={() => setIsFormOpen(false)} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
