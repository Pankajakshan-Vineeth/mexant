import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <div className="left-container">
        <div class="tabs">
          <button class="tab active">Web Design</button>
          <button class="tab">Graphics</button>
          <button class="tab">Web Coding</button>
        </div>
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">Website Redesign</a>
              </td>
              <td>$1,500 to $2,200</td>
              <td>2022 Dec 12</td>
              <td>Web Biz</td>
            </tr>
            <tr>
              <td>
                <a href="#">Website Renovation</a>
              </td>
              <td>$2,500 to $3,600</td>
              <td>2022 Dec 10</td>
              <td>Online Ads</td>
            </tr>
            <tr>
              <td>
                <a href="#">Marketing Plan</a>
              </td>
              <td>$2,500 to $4,200</td>
              <td>2022 Dec 8</td>
              <td>Web Biz</td>
            </tr>
            <tr>
              <td>
                <a href="#">All-new Website</a>
              </td>
              <td>$3,000 to $6,600</td>
              <td>2022 Dec 2</td>
              <td>Web Presence</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right-container">
        <h3>Please tell us about your idea and how you want it to be</h3>
        <p className="strong1">
          You are allowed to use this template for your <br /> websites. You are
          <strong> NOT allowed</strong> to redistribute <br />
          the template ZIP file on any other template <br /> websites.
        </p>
        <p className="thanks">
          Thank you for downloading and using our templates. Please tell your
          friends about our website.
        </p>
        <button className="button-one">Discover More</button>
      </div>
    </div>
  );
};

export default Table;
