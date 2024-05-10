import Ramen from "../assets/food1.png";
import Button from "./Button";

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
      <p className="card-price">
        <b>Price : </b>
        {price}
      </p>
      <Button onClick={() => handleOnClick(name)} />
    </div>
  );
};

Card.defaultProps = {
  image: { Ramen },
  name: "Default",
  price: "Default",
};

const handleOnClick = (name: string) => {
  console.log(name + " Added To Cart");
};
export default Card;
