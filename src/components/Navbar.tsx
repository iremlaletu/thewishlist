import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto gap-5">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Your List
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
          >
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    fill="#231F20"
                    d="M60.476,16H15.059L12,3c-0.438-1.75-1.614-3-3.271-3H3C1.343,0,0,1.343,0,3s1.343,3,3,3h3.723 l11.069,46.458C15.619,53.359,14.09,55.501,14.09,58c0,3.313,2.687,6,6,6c2.972,0,5.433-2.162,5.91-5h14.09 c0.478,2.838,2.938,5,5.91,5c3.313,0,6-2.687,6-6s-2.687-6-6-6c-2.972,0-5.433,2.164-5.91,5H26c-0.478-2.836-2.938-5-5.91-5 c-0.125,0-0.246,0.012-0.369,0.019l-0.642-2.258C19.507,49.904,19.972,50,20.505,50h32.969c2.625,0,3.908-1.904,4.5-4l5.933-26 C64.344,17.583,63.265,16,60.476,16z M46,54c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4S43.791,54,46,54z M24.09,58 c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S24.09,55.791,24.09,58z M8.38,4.611C8.38,4.611,8.226,4,7.529,4S3,4,3,4 C2.447,4,2,3.553,2,3s0.447-1,1-1h5.833C9.386,2,9.837,2.455,10,3l3.059,13h0.459c-0.991,0-1.756,0.209-2.323,0.576L8.38,4.611z M61.974,20l-6,26c-0.271,1.167-1.021,2-2.125,2H20.131c-1.102,0-1.85-0.833-2.12-2l-5.988-26c-0.312-1.229,0.125-2,1.479-2h46.989 C61.849,18,62.286,18.771,61.974,20z"
                  ></path>
                  <circle fill="#231F20" cx="46" cy="58" r="1"></circle>{" "}
                  <circle fill="#231F20" cx="20.09" cy="58" r="1"></circle>{" "}
                  <path
                    fill="#231F20"
                    d="M37,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C40,23.343,38.657,22,37,22z M38,41 c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  ></path>
                  <path
                    fill="#231F20"
                    d="M47,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C50,23.343,48.657,22,47,22z M48,41 c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  ></path>
                  <path
                    fill="#231F20"
                    d="M27,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C30,23.343,28.657,22,27,22z M28,41 c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  ></path>
                </g>
              </g>
            </svg>
            <div
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(1%, 1%)",
              }}
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
