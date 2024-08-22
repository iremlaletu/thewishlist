import { Button } from "react-bootstrap";

type AddProductProps = {
  handleShow: () => void;
};
export default function AddProduct({ handleShow }: AddProductProps) {
  return (
    <div>
      <Button variant="outline-secondary" className="p-4" onClick={handleShow}>
        Add New Product
      </Button>
    </div>
  );
}
