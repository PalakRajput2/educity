// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import play_button from "../../assets/playbuttonnew.png";
import about_img from "../../assets/about-img.jpg";

// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="image not found" className="about-img" />
        <img
          src={play_button}
          alt="image not found"
          className="play-button"
          onClick={() => {setPlayState(true)}}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>

        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
        <br></br>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          error ut provident vel repellendus nihil atque possimus aliquam,
          mollitia tempora neque voluptate debitis illum veniam.Numquam
          blanditiis dignissimos laboriosam illum ut officia.
        </p>
        <br></br>
        <p>
          Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quas nulla sequi pariatur quam animi
          ipsum molestias assumenda cumque.
        </p>
        <br></br>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default About;
