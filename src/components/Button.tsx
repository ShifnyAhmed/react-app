interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      Add To Cart
    </button>
  );
};

export default Button;
