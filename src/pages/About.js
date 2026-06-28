import React from "react";
import "./About.css";

import image1 from "../images/images/about";
import image2 from "../images/images/white.jfif";
import image3 from "../images/images/logo.jfif";
import image4 from "../images/images/logo1.jfif";
import image5 from "../images/images/logo3.jfif";
import image6 from "../images/images/logo3.png";

const About = () => {
  return (
    <div className="you">
      <center>
        <h1 className="all">ABOUT US</h1>
        <h5 className="all">
          "Elegance is the only beauty that never fades."
        </h5>
      </center>

      <br />
      <br />

      <div className="card mb-3">
        <div className="row g-0 clr">
          <div className="col-md-4 p-5">
            <img src={image1} className="about" alt="About Us" />
          </div>

          <div className="col-md-8">
            <div className="card-body clr p-5">
              <center>
                <h1>WHO WE ARE</h1>
                <h5>
                  "Elegance is the only beauty that never fades."
                </h5>
              </center>

              <br />

              <p className="all">
                Johanna Innsbruck and Linda Copperfield have always dreamed of
                comfortable women's clothing that would look appropriate in any
                circumstances.
                <br />
                <br />
                This is how the Ultras Casual appeared – it is a brand for women
                who like to feel confident, seductive and stylish in any
                situation. We use only natural fabrics and pay great attention
                to details that make the difference.
                <br />
                <br />
                "I have always had difficulties with buying clothes for
                everyday wear. Therefore, together with Linda, we decided to
                create our own brand."
              </p>

              <center>
                <button type="button" className="btn btn-secondary">
                  Follow Us On Instagram
                </button>

                <br />
                <br />

                <button type="button" className="btn btn-secondary">
                  Follow Us On Facebook
                </button>
              </center>
            </div>
          </div>
        </div>

        <br />
        <br />

        <section className="clr">
          <div className="container p-5">
            <div className="row row-cols-4">
              <div className="col">
                <h1>New Arrival</h1>
                <br />
                <img src={image3} alt="New Arrival" />
              </div>

              <div className="col">
                <h1>99+ Customer</h1>
                <br />
                <img src={image4} alt="Customers" />
              </div>

              <div className="col">
                <h1>Unique Wear</h1>
                <br />
                <img src={image5} alt="Unique Wear" />
              </div>

              <div className="col">
                <h1>Stylish Wear</h1>
                <br />
                <img src={image6} alt="Stylish Wear" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <br />
      <br />

      <section>
        <img src={image2} alt="Fashion Banner" className="img-fluid w-100" />
      </section>

      <br />
      <br />
      <br />
    </div>
  );
};

export default About;