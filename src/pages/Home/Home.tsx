import "../../styles/home.css";
import transition from "../../components/transition";
const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div>
        <h6>The</h6>
        <div className="wish">Wish</div>
        <div className="list">List</div>
      </div>
    </div>
  );
};

export default transition(Home);
