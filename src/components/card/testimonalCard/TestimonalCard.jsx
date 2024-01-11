import "./style.scss";

const TestimonalCard = () => {
  return (
    <div className="testimonCard">
      <img className="avatar" src="/images/avatar1.svg" alt="" />
      <h5>
        <span>Mark Smith</span> / Travel Enthusiast
      </h5>
      <div className="stars">
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
        <img src="/images/star.svg" alt="" />
      </div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
    </div>
  );
};

export default TestimonalCard;
