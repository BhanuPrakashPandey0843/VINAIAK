import React from "react";
import "./OurClients.css";

const OurClients = () => {
  const logos = [
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];

  return (
    <section className="our-clients">
      <div className="slider">
        <div className="slider-track">
          {/* Display logos twice for infinite scrolling */}
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
