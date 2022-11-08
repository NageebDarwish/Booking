import { useEffect, useState } from "react";

export default function Benfits() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/benefits/show`)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  const benfits = data.map((item, index) => (
    <div className="col-md-4 text-center" key={index}>
      <div className="d-flex flex-column gap-2 text-center">
        {localStorage.getItem("dark") === "true" ? (
          <div
            className="mb-3"
            style={{
              alignSelf: "center",
              lineHeight: "150px",
              width: "150px",
              height: "150px",
            }}
            width="150px"
          >
            <img src={item.image_light} alt="logo" width="100px" />
          </div>
        ) : (
          <div
            className="mb-3"
            style={{
              alignSelf: "center",
              lineHeight: "150px",
              width: "150px",
              height: "150px",
            }}
          >
            <img
              style={{ lineHeight: "100px" }}
              src={item.image_dark}
              alt="logo"
              width="100px"
            />
          </div>
        )}
        <h2 style={{ color: "var(--benfit)" }} className="mb-3">
          {item.title_ar}
        </h2>
        <p style={{ fontSize: "13px" }} className="card-title mb-3">
          {item.description_ar}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="wide-father pb-5">
      <div className="container">
        <h3 className="text-center mb-3 fw-bold pt-3">لماذا تشترك معنا</h3>
        <div className="row">{benfits}</div>
      </div>
    </div>
  );
}
