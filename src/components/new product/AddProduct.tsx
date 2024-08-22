import { Button } from "react-bootstrap";

type AddProductProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AddProduct({ setIsFormOpen }: AddProductProps) {
  return (
    <div>
      <Button
        variant="outline-secondary"
        size="lg"
        onClick={() => setIsFormOpen(true)}
      >
        Add New Product
      </Button>
    </div>
  );
}
