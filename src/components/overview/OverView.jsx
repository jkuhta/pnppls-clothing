import React from "react";
import "./OverView.css";
import { useState } from "react";

const OverView = () => {
  const [selectedSection, setSelectedSection] = useState("overview");

  const handleSection = (section) => {
    setSelectedSection(section);
  };

  const sections = ["overview", "size guide", "care guide"];
  return (
    <div className="overview section">
      <div className="overview-buttons">
        {sections.map((item, index) => (
          <button
            className={
              selectedSection === item ? "overview-btn active" : "overview-btn"
            }
            key={index}
            onClick={() => handleSection(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div
        className={
          selectedSection === "overview"
            ? "overview-overview-section overview-section"
            : "hidden"
        }
      >
        <div className="overview-overview-left">
          <div className="overview-specificatons">
            <h3 className="overview-subtitle">Specifications</h3>
            <ul>
              <li>
                Water resistant jacket with a zip guard made using REPREVE
                recycled polyester.
              </li>
              <li>Breathable, light-weight.</li>
              <li>This jacket has a chemical free print on the chest.</li>
              <li> Adjustable shock cord on the hood.</li>
              <li>Pouch pocket with dual entry at the top and side.</li>
              <li>YKK zips throughout with contrast colour zip ends.</li>
              <li>3 Piece hood with a peak.</li>
              <li>Unique tape detailing across front.</li>
              <li>Hanging loop.</li>
              <li>Packs away in to it's own pocket.</li>
              <li>
                Cut in a regular fit with a straight hem and a chin guard.
              </li>
              <li>Recycled care label.</li>
            </ul>
          </div>
        </div>
        <div className="overview-overview-right">
          <div className="overview-product-overview">
            <h3 className="overview-subtitle">Product Overview</h3>
            <p>
              With a classic, retro look the Flow overhead half zip jacket is
              made from 100% REPREVE, recycled fabric made for a lighter
              footprint. It's breathable and water resistant, keeping the
              elements off on any adventure and features front and side entry
              kangaroo pocket, perfect for all your travel stash.
            </p>
          </div>
          <div className="overview-materials ">
            <h3 className="overview-subtitle">Materials</h3>
            <p>
              Main: 100% Recycled REPREVE Polyester Ripstop (50D) with a
              PFC-free water repellent coating (DWR) and a 5,000mm breathability
              rating.
            </p>
            <p>
              REPREVE fabric is made from recycled, single-use plastic bottles
              and finished with a PFC-Free water repellent coating. Recycled
              polyester reduces our dependence on petroleum, cuts out the water
              and air pollution produced when creating virgin polyester,
              alongside preventing unnecessary landfill waste.
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          selectedSection === "size guide"
            ? "overview-sizeguide overview-section"
            : "hidden"
        }
      >
        <div class="table-wrap">
          <table>
            <tbody>
              <tr>
                <td className="table-head">
                  <strong>UK Size</strong>
                </td>
                <td className="table-head" colspan="2">
                  <strong>Chest</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong></strong>
                </td>
                <td>Inches</td>
                <td>CM</td>
              </tr>
              <tr>
                <td>
                  <strong>S</strong>
                </td>
                <td>36 - 38</td>
                <td>91 - 96</td>
              </tr>
              <tr>
                <td>
                  <strong>M</strong>
                </td>
                <td>38 - 40</td>
                <td>96 - 101</td>
              </tr>
              <tr>
                <td>
                  <strong>L</strong>
                </td>
                <td>40 - 42</td>
                <td>101 - 106</td>
              </tr>
              <tr>
                <td>
                  <strong>XL</strong>
                </td>
                <td>42 - 44</td>
                <td>106 - 111</td>
              </tr>
              <tr>
                <td>
                  <strong>XXL</strong>
                </td>
                <td>44 - 46</td>
                <td>111 - 116</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={
          selectedSection === "care guide"
            ? "overview-careguide overview-section"
            : "hidden"
        }
      >
        <h3 className="overview-subtitle">Care Guide</h3>
        <ul>
          <li>
            Hand Wash if necessary - this product has sealed seams and a
            waterproof coating, try to minimise washing to keep the waterproof
            functionality.
          </li>
          <li>Wipe clean to remove areas of dirt.</li>
          <li>Do not use bleach or softener.</li>
          <li>Hang dry when possible.</li>
          <li>Do not iron or tumble dry.</li>
        </ul>
      </div>
    </div>
  );
};

export default OverView;
