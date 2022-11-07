import HeaderAr from "./components/HeaderAr";

import FooterAr from "./components/FooterAr";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const id = Number(window.location.pathname.split("/").slice(-1)[0]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/city/show")
      .then((res) => res.json())
      .then((data) => {
        setData(data.filter((item) => item.state_id === id));
        setLoading(false);
      });
  }, []);

  const items = data.map((item) => (
    <Link
      to={`hotels/${item.id}`}
      style={{
        textDecoration: "none",
        textAlign: "center",
      }}
    >
      <div className="card" style={{ width: "24rem" }}>
        <img
          className="card-img-top"
          src={item.city_image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h3 className="card-text" style={{ fontWeight: "bold" }}>
            {item.city_name_ar}
          </h3>
        </div>
      </div>
    </Link>
  ));
  return (
    <div>
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
          padding: "5rem 0",
          gap: "20px",
        }}
      >
        {items}
      </div>

      <FooterAr />
    </div>
  );
}
