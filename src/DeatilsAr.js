import { useState } from "react";
import parse from "html-react-parser";
import HeaderAr from "./components/HeaderAr";
import FooterAr from "./components/FooterAr";
import ModalAr from "./components/ModalAr";

import { useEffect } from "react";

export default function Pack() {
  const [deatils, setDeatil] = useState([]);
  const [videos, setVideos] = useState([]);
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);

  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/detail/show`)
      .then((res) => res.json())
      .then((dataRes) => setDeatil(dataRes.filter((x) => x.package_id === id)));
  }, []);
  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/video/show`)
      .then((res) => res.json())
      .then((dataRes) => setVideos(dataRes));
  }, []);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) =>
        setData(dataRes.filter((x) => x.id === id)[0].package_price)
      );
  }, []);
  const items = deatils.map((item) => (
    <div className="container">
      <div>
        <div className="WordStyle">{parse(item.text_ar)}</div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide custom-detail"
        data-bs-ride="carousel"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={item.detailimages[0].image}
              className="d-block w-100"
              height={"600px"}
              alt="img"
            />
          </div>
          {deatils
            .map((item) => item.detailimages)[0]
            .slice(1)
            .map((nice) => (
              <div className="carousel-item">
                <img
                  src={nice.image}
                  className="d-block w-100"
                  height={"600px"}
                  alt="img"
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ left: "-10%" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ right: "-10%" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div className="WordStyle">{parse(item.text2_ar)}</div>
      </div>
    </div>
  ));

  const videosI = videos.map((item) => (
    <div className="col-md-4">
      <video autoPlay muted>
        <source src={`${item.video}`} type="video/mp4" />
      </video>
    </div>
  ));
  return (
    <>
      <ModalAr />
      <HeaderAr />
      <div className="arabic" style={{ marginTop: "10%" }}>
        {items}
        <div className="row container">{videosI}</div>
        <div
          style={{
            position: "sticky",
            bottom: "0px",
            backgroundColor: "var(--first-color)",
            opacity: "0.8",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between container"
            style={{
              paddingBottom: "1rem",
              paddingTop: "1rem",
            }}
            dir="rtl"
          >
            <h4
              style={{
                color: "#FFAD5B",
              }}
            >
              سعر البكج: <span style={{ color: "#ff5959" }}>{data}$</span>
            </h4>
            <div
              className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0"
              style={{
                marginLeft: "10px",
                width: "120px",
              }}
            >
              <a href="https://40.87.158.147/reseller/auth/" className="b2b">
                حجز
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterAr />
    </>
  );
}
