import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { CartItem } from "../components/CartItem";
import { Product } from "../types";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  products: Product[];
  isFormOpen: boolean;
  productToEdit: Product | null;
  openProductForm: (product?: Product) => void;
  closeProductForm: () => void;
  handleAddProduct: () => void;
  handleFormSubmit: (product: Product) => void;
  removeProduct: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setProductToEdit(null); // Reset form for new product
    setIsFormOpen(true);
  };

  const handleFormSubmit = (product: Product) => {
    setProducts((currProducts) => {
      const existingProduct = currProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        // Ürün varsa güncelle
        return currProducts.map((item) =>
          item.id === product.id ? product : item
        );
      }
      // Ürün yoksa yeni ürün ekle
      return [...currProducts, product];
    });
  };

  const closeProductForm = () => setIsFormOpen(false);

  const openProductForm = (product?: Product) => {
    setProductToEdit(product || null);
    setIsFormOpen(true);
  };
  const removeProduct = (id: number) => {
    setProducts((currProducts) => {
      return currProducts.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
      }
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
      }
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        products,
        openProductForm,
        closeProductForm,
        isFormOpen,
        productToEdit,
        handleAddProduct,
        handleFormSubmit,
        removeProduct,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
