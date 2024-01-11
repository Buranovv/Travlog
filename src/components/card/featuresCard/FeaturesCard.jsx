import "./style.scss";

const FeaturesCard = ({ className, title, text, img }) => {
  return (
    <div className={`featuresCard ${className}`}>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
