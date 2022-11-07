import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import { useEffect } from "react";

export default function Pack() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes.filter((x) => x.hotel_id === id));
        setLoading(false);
      });
  }, []);

  const items = data.map((item, key) => (
    <div
      key={key}
      className="pack-card"
      style={{
        marginBottom: "2rem",
        boxShadow: "0 2px 15px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        className="w-100 "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="header">
          <p style={{ marginBottom: "0" }}>Package</p>
        </div>
      </div>
      <div className="pakeg">
        <div className="content">
          <h1>{item.details_title_en}</h1>

          <p className="balneo">
            Package Period: <span style={{ fontWeight: "blod" }}> From </span>
            <span style={{ color: "#ff5959" }}> {item.period_from}</span>
            <span style={{ fontWeight: "blod" }}> To </span>{" "}
            <span style={{ color: "#ff5959" }}> {item.period_to}</span>
          </p>
          <p className="balneo">
            Package Price:{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_price}$
            </span>
          </p>
          <div>
            <p className="paragraph">
              <span style={{ color: "#FDAC53" }}>
                {item.package_rate === 0 || item.package_rate === null ? (
                  ""
                ) : item.package_rate === 1 ? (
                  <i className="fa-solid fa-star"></i>
                ) : item.package_rate === 2 ? (
                  <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </>
                ) : item.package_rate === 3 ? (
                  <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </>
                ) : item.package_rate === 4 ? (
                  <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </>
                )}
              </span>
            </p>
          </div>
          <Link to={`deatils/${item.id}`}>
            <div
              className="btn roundrd-circle main-btn btn-login"
              style={{ marginLeft: "10px" }}
            >
              Deatils
            </div>
          </Link>
        </div>
        <img
          src={item.package_image}
          width={"500px"}
          height="300px"
          alt={"img"}
        />
      </div>
    </div>
  ));
  return (
    <>
      {loading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      <Header />
      <div className="wide-father">
        <div className="container" style={{ padding: "5rem 0" }}>
          {items}
        </div>
      </div>
      <Footer />
    </>
  );
}
