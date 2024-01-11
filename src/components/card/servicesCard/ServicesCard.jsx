import "./style.scss";

const ServicesCard = ({img, title, text}) => {
  return (
    <div className="servicesCard">
      <img src={img} alt="card svg" />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default ServicesCard;
