import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./slider1.jpg";
import Slider2 from "./slider2.jpg";
import Slider3 from "./slider3.jpg";
import Slider4 from "./slider4.jpg";
import Slider5 from "./slider5.jpg";
import Slider6 from "./slider6.jpg";
import Slider7 from "./slider7.jpg";
import Slider8 from "./slider8.jpg";

const Slider = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators={false} showArrows={false}>
      <div>
        <img src={Slider1} alt="slider1" />
        <aside className="legend">
          <h1>Utah, USA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider2} alt="slider2" />
        <aside className="legend">
          <h1>Moraine Lake, Canada</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider3} alt="slider3" />
        <aside className="legend">
          <h1>Ular Mountains, Russia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider4} alt="slider4" />
        <aside className="legend">
          <h1>Silk Route, India</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider5} alt="slider5" />
        <aside className="legend">
          <h1>Bali, Indonesia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider6} alt="slider6" />
        <aside className="legend">
          <h1>Zermatt, Switzerland</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider7} alt="slider7" />
        <aside className="legend">
          <h1>Hyatt Regency, Singapore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
      <div>
        <img src={Slider8} alt="slider8" />
        <aside className="legend">
          <h1>Europian Alps, Austria</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia ipsum placeat quis, fugiat distinctio pariatur sapiente
            voluptatum perferendis ipsam libero debitis illum nostrum nesciunt
            obcaecati rerum voluptate sint porro.
          </p>
          <button>View More</button>
        </aside>
      </div>
    </Carousel>
  );
};

export default Slider;
