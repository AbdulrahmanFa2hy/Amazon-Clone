import React from "react";
import Product from "./Product";
import "./Home.css";
import img1 from "../images/products/1.png";
import img2 from "../images/products/2.png";
import img3 from "../images/products/3.png";
import img4 from "../images/products/4.png";
import img5 from "../images/products/5.png";
import img6 from "../images/products/6.png";
// import homeImage from "../images/home.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">{/* <img src={homeImage} alt="" /> */}</div>
      <div className="row-component">
        <Product
          id={Math.random() * 1000}
          img={img1}
          price={64}
          title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
          rating={5}
        />
        <Product
          id={Math.random() * 1000}
          img={img2}
          price={682.95}
          title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
          rating={4}
        />
      </div>
      <div className="row-component">
        <Product
          id={Math.random() * 1000}
          img={img3}
          price={449}
          title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
          rating={5}
        />
        <Product
          id={Math.random() * 1000}
          img={img4}
          price={229}
          title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
          rating={3}
        />
        <Product
          id={Math.random() * 1000}
          img={img5}
          price={239}
          title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
          rating={5}
        />
      </div>
      <div className="row-component">
        <Product
          id={Math.random() * 1000}
          img={img6}
          price={(1, 142)}
          title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
