import React from "react";
import "./Story.css";
import Slogan from "../../components/slogan/Slogan";

const Story = () => {
  return (
    <div className="story">
      <div className="story-bg-img">
        <div className="story-content">
          <h1 className="section-title story-title">Our Story</h1>
        </div>
      </div>
      <Slogan />
      <div className="story-bg-img-2">
        <div className="story-content">
          <h1 className="section-title story-title">COMING SOON</h1>
        </div>
      </div>
    </div>
  );
};

export default Story;
