import Counter from "../../../utils/counter/Counter";
import "./style.scss";

const LocationCard = ({ num, title, symb }) => {
  return (
    <div className="locationCard">
      <h5>
        <Counter number={num} />{symb}
      </h5>
      <p>{title}</p>
    </div>
  );
};

export default LocationCard;
