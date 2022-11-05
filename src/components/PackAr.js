import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAr from "./HeaderAr";
import FooterAr from "./FooterAr";
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

  const items = data.map((item) => (
    <div
      className="arabic pack-card"
      style={{
        marginBottom: "2rem",
        boxShadow: "0 2px 15px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        className="w-100"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="header">
          <p style={{ marginBottom: "0" }}>حزمة</p>
        </div>
      </div>
      <div className="pakeg ar-package">
        <div className="content ar-content">
          <h1 dir="rtl">{item.details_title_ar}</h1>

          <p className="balneo" dir="rtl">
            مدة البكج: <span style={{ fontWeight: "blod" }}> من </span>
            <span style={{ color: "#ff5959" }}> {item.period_from}</span>
            <span style={{ fontWeight: "blod" }}> الى </span>{" "}
            <span style={{ color: "#ff5959" }}> {item.period_to}</span>
          </p>
          <p className="balneo" dir="rtl">
            سعر البكج:{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {item.package_price}$
            </span>
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
          <div dir="rtl">
            <Link to={`deatils/${item.id}`}>
              <div
                className="btn roundrd-circle main-btn btn-login"
                style={{ marginLeft: "10px" }}
              >
                التفاصيل
              </div>
            </Link>
            <div
              className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0"
              style={{ marginLeft: "10px" }}
            >
              <a href="https://40.87.158.147/reseller/auth/" className="b2b">
                حجز الحزمة
              </a>
            </div>
          </div>
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
      <HeaderAr />
      {loading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      <div className="wide-father">
        <div className="container" style={{ padding: "5rem 0" }}>
          {items}
        </div>
      </div>
      <FooterAr />
    </>
  );
}
