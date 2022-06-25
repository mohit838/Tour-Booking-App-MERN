import React from "react";
import "./hotel.css";
import Navbar from "./../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "./../../components/mailList/MailList";
import Footer from "./../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
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

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleArrowMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faCircleXmark}
              className="close"
            />
            <FontAwesomeIcon
              onClick={() => handleArrowMove("l")}
              icon={faCircleArrowLeft}
              className="arrow"
            />
            <div className="sliderwrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImages"
              />
              <FontAwesomeIcon
                onClick={() => handleArrowMove("r")}
                icon={faCircleArrowRight}
                className="arrow"
              />
            </div>
          </div>
        )}
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
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
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
