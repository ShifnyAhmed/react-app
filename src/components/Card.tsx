import Ramen from "../assets/food1.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={Ramen} alt="Ramen Pic"></img>
      <h2 className="card-foodname">Ramen</h2>
      <p className="card-price">Price : Rs 500</p>
    </div>
  );
}

export default Card;
