import React from "react";
import "./hotel.css";
import Navbar from "./../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "./../../components/mailList/MailList";
import Footer from "./../../components/footer/Footer";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/178925192.jpg?k=448baf1f7ddc25eae7cff8afe1f1a44e85b100a43e1abbd97546bf4763d5005f&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Title</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 Bolton Road, UK</span>
          </div>
          <span className="hotelDistance">500m from the center.</span>
          <span className="hotelPriceHighlight">
            Booking over $114 to make your airport taxi free.
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Lorem ipsum dolor sit amet.</h1>
              <div className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, dignissimos, repudiandae impedit laudantium molestias
                aliquam dolorem hic veniam ratione exercitationem soluta
                accusantium id veritatis asperiores fugit ducimus neque eveniet,
                quisquam vitae. Enim, ut. Ullam error voluptatum ipsa, in ipsum
                quae voluptatibus laboriosam repellendus, nesciunt soluta a
                pariatur? Tenetur, modi ex!
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Lorem, ipsum dolor.</h1>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, totam?
              </span>
              <h2>
                <b>Price $123</b> (9 Nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
