import HeaderAr from "./components/HeaderAr";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterAr from "./components/FooterAr";

export default function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/package/show")
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  const items = data.map((item) => (
    <div className="card" dir="rtl" style={{ width: "24rem", padding: "0" }}>
      <img
        src={item.package_image}
        className="card-img-top  featured-img"
        alt="..."
        style={{ width: "100%", height: "20vw", objectFit: "cover" }}
      />
      <div className="card-body" dir="rtl">
        <h5 className="card-title">{item.details_title_ar}</h5>

        <p className="card-text">
          <p className="balneo" dir="rtl">
            مدة البكج: <span style={{ fontWeight: "blod" }}> من </span>
            <span style={{ color: "#ff5959" }}> {item.period_from}</span>
            <span style={{ fontWeight: "blod" }}> الى </span>{" "}
            <span style={{ color: "#ff5959" }}> {item.period_to}</span>
          </p>
          <div dir="rtl">
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
        </p>
        <p className="card-text">{item.city_details_text1_ar}</p>
      </div>
      <div>
        <Link to={`/ar/deatils/${item.id}`}>
          <div
            className="btn roundrd-circle main-btn btn-login"
            style={{ marginRight: "10px", marginBottom: "20px" }}
          >
            التفاصيل
          </div>
        </Link>
      </div>
    </div>
  ));
  return (
    <div className="wide-father">
      <HeaderAr />
      <div>
        <div
          className="container"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div
            className="row"
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            dir="rtl"
          >
            {items}
          </div>
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
