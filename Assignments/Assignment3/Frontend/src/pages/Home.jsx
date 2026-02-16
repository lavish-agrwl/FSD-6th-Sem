import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
