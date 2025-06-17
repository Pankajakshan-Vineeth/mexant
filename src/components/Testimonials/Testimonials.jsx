import "./Testimonials.css";
import quote from "../../assets/left-quotes.png";
import person from "../../assets/testimonials-01.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <div className="text-testimonial">
          <img src={quote} alt="" className="quote-icon" />
          <p>
            <em>
              "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum
              lectus cursus nec. In blandit <br /> nibh dolor, at rutrum leo
              accumsan porta. Nullam pulvinar eros porttitor risus <br />
              condimentum tempus."
            </em>
          </p>
          <h2>Andrew Garfield</h2>
          <h5>CTO of Mexant</h5>
        </div>
        <img className="testimonial-image" src={person} alt="" />
      </div>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Testimonials;
