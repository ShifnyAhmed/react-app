import Ramen from "../assets/food1.png";

interface Props {
  image: any;
  name: string;
  price: string;
}

const Card = ({ image, name, price }: Props) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="Food Pic" />
      <h2 className="card-foodname">{name}</h2>
      <p className="card-price">Price : {price}</p>
    </div>
  );
};

Card.defaultProps = {
  image: { Ramen },
  name: "Default",
  price: "Default",
};

export default Card;
