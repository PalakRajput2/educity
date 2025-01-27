// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Testimonial.css";
import arrow_right from "../../assets/arrow-right.png";
import arrow_left from "../../assets/arrow-left.png";
import user_1 from "../../assets/user1.jpg";
import user_2 from "../../assets/user2.jpg";
import user_3 from "../../assets/user3.jpg";
import user_4 from "../../assets/user1.jpg";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    } else {
      tx = 0; // Reset to the first slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else {
      tx = -50; // Move to the last slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={arrow_right} className="next-btn" onClick={slideForward} />
      <img src={arrow_left} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>John Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity is the best decision
                I&apos;ve ever made.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Marie Hawker</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity is the best decision
                I&apos;ve ever made.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Daisy William</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity is the best decision
                I&apos;ve ever made.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>William Marie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity is the best decision
                I&apos;ve ever made.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
