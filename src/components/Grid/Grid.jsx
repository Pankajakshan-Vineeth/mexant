import "./Grid.css";
import box from "../../assets/Box.png";
import cloud from "../../assets/cloud.png";
import charge from "../../assets/charge.png";
import tablet from "../../assets/tablet.png";
import help from "../../assets/help.png";
import extension from "../../assets/extension.png";

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-column-container">
        <div className="grid-columns">
          <div className="grid-content">
            <img src={box} alt="" className="icons" />
            <div className="text">
              <h3>CSS Templates</h3>
              <p>
                TemplateMo website is the best for you to explore and download
                free website templates.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-columns">
          <div className="grid-content">
            <img src={cloud} alt="" className="icons" />
            <div className="text">
              <h3>HTML5 Web Pages</h3>
              <p>
                Templates are based on Bootstrap 5 CSS framework. You can easily
                adapt or modify based on your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-columns">
          <div className="grid-content">
            <img src={charge} alt="" className="icons" />
            <div className="text">
              <h3>Responsive Designs</h3>
              <p>
                All of our CSS templates are 100% free to use for commercial or
                business websites.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-columns">
          <div className="grid-content">
            <img src={tablet} alt="" className="icons" />
            <div className="text">
              <h3>Mobile and Tablet ready!</h3>
              <p>
                Our HTML CSS templates are well-tested on mobile, tablet, and
                desktop compatibility.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-columns">
          <div className="grid-content">
            <img src={help} alt="" className="icons" />
            <div className="text">
              <h3>Fast Customer Support</h3>
              <p>
                Do not be hesitated to contact us if you have any question or
                concern about our templates.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-columns">
          <div className="grid-content">
            <img src={extension} alt="" className="icons" />
            <div className="text">
              <h3>Fully Customizable</h3>
              <p>
                If you have any idea or suggestion about new templates, feel
                free to let us know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
