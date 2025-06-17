import "./Contact.css";
import lady from "../../assets/calculator-image.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image">
        <img src={lady} alt="" className="lady-image" />
      </div>
      <div className="background-section">
        <form className="contact-form">
          <div className="titles">
            <p>YOUR FREEDOM</p>
            <h1>Get A Financial Plan</h1>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Your Email</label>
              <input type="email" />
            </div>
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>Your Reason</label>
            <select name="service" className="form-select">
              <option value="">Choose an Option</option>
              <option value="web-design">Web Design</option>
              <option value="graphics">Graphics</option>
              <option value="coding">Web Coding</option>
            </select>
          </div>

          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
