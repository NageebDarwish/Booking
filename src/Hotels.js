import Header from "./components/Header";

import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/hotel/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes.filter((x) => x.city_id === id));
        setLoading(false);
      });
  }, []);
  console.log(data);

  const items = data.map(
    (item) =>
      item.hotel_show === "yes" && (
        <div className="card" style={{ width: "24rem" }}>
          <div className="card-body text-center">
            <Link to={`packages/${item.id}`} style={{ textDecoration: "none" }}>
              <img
                className="card-img-top mb-2"
                style={{ width: "500px", height: "300px", objectFit: "cover" }}
                src={item.hotel_image}
                alt="Card cap"
              />
              <h3
                className="card-text"
                style={{ fontWeight: "bold", color: "#ff5959" }}
              >
                {item.hotel_name_en}
              </h3>
            </Link>
            <h3 className="card-text">
              {item.hotel_location_en !== "undefined" ? (
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
                      {item.hotel_location_en}
                    </a>
                  </span>
                </>
              ) : (
                ""
              )}
            </h3>
          </div>
        </div>
      )
  );
  return (
    <div>
      <Header />
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
          padding: "5rem 0",
          gap: "20px",
        }}
      >
        {items}
      </div>
      <Footer />
    </div>
  );
}
