import HeaderAr from "./components/HeaderAr";

import FooterAr from "./components/FooterAr";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";

export default function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/hotel/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes.filter((x) => x.city_id === id));
        setLoading(false);
      });
  }, []);

  const items = data.map(
    (item) =>
      item.hotel_show === "yes" && (
        <Link to={`packages/${item.id}`} style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-body text-center">
              <img
                className="card-img-top mb-2"
                src={item.hotel_image}
                style={{
                  width: "500px",
                  height: "300px",
                  objectFit: "cover",
                }}
                alt="Card  cap"
              />
              <h3
                className="card-text"
                style={{ fontWeight: "bold", color: "#ff5959" }}
                dir="rtl"
              >
                {item.hotel_name_ar}
              </h3>
              <h3 className="card-text" dir="rtl">
                {item.hotel_location_ar !== "undefined" ? (
                  <>
                    {" "}
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "var(--yellow-color)" }}
                    >
                      {" "}
                    </i>{" "}
                    <span style={{ fontSize: "22px" }}>
                      {" "}
                      <a
                        href={item.location_url}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        {item.hotel_location_ar}
                      </a>
                    </span>
                  </>
                ) : (
                  ""
                )}
              </h3>
            </div>
          </div>
        </Link>
      )
  );
  return (
    <div className="arabic">
      <HeaderAr />
      {loading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      <div
        className="wide-father"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "5rem 0",
          gap: "20px",
        }}
      >
        {items}
      </div>
      <FooterAr />
    </div>
  );
}
