import { Link } from "react-router-dom";
import videoBg from "../assets/videoBg.mp4";
import "./RatingScore.css";

const RatingScore = () => {
  return (
    <main>
      <div className="videobg ">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="mainMenu">
        <div className="blockMenu">
          <h1>Rating Score:</h1>
          <div className="itemMenu bgOne">
            <Link to="#">Bar && Restaurants</Link>
          </div>
          <div className="itemMenu bgTwo">
            <Link to="#"> Grocery Store</Link>
          </div>
          <div className="itemMenu bgThree">
            <Link to="#">Recipes</Link>
          </div>
          <div className="itemMenu bgfoure">
            <Link to="#">FQA</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RatingScore;
