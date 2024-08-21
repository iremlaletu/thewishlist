import "../styles/home.css";
import transition from "../components/transition";
const Home = () => {
  return (
    <div className="home-container d-flex align-items-center justify-content-center">
      <div className="text-container">
        <h6>The</h6>
        <div className="wish">Wish</div>
        <div className="list">List</div>
      </div>
    </div>
  );
};

export default transition(Home);
