import "./style.scss";

const DestinationCard = ({ img, title, location, price, rating }) => {
  return (
    <div className="destinationCard">
      <img className="img" src={img} alt="" />
      <div className="cardBody">
        <div className="description">
          <h5>{title}</h5>
          <p>${price}</p>
        </div>
        <p className="city">{location}</p>
        <p className="rating">
          {rating} <img src="/images/star.svg" alt="" />
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
