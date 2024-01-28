import React from "react";
import "./comp.css";
import { HiLocationMarker } from "react-icons/hi";
import Countup from "react-countup";
const Comp = () => {
  return (
    <section className="comp-wrapper">
      <div className="padding innerWidth flexCenter comp-container">
        <div className="flexColStart comp-left">
          <div className="comp-title">
            <div className="orange-circle"></div>
            <h1>
              Dicover <br /> Most Valuable <br /> Property
            </h1>
          </div>
          <div className="flexColStart comp-des">
            <span className="secondaryText">
              Our platform is designed to identify and highlight the most
              valuable properties
            </span>

            <span className="secondaryText">
              We are passionate developers and designers who are
              always on the lookout.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button>SEARCH</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <Countup start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <Countup start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <Countup end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
          </div>
        </div>
        <div className="comp-right FlexCenter">
          <div className="img-Container">
            <img src="./comp-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Comp;
