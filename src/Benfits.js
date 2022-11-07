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
              backgroundImage: `url(${item.image_light})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "150px",
              height: "150px",
            }}
            alt={"img"}
            width="150px"
          ></div>
        ) : (
          <div
            className="mb-3"
            style={{
              alignSelf: "center",
              backgroundImage: `url(${item.image_dark})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "150px",
              height: "150px",
            }}
          ></div>
        )}
        <h2 className="card-title mb-3">{item.title_en}</h2>
        <p className="card-title mb-3">{item.description_en}</p>
      </div>
    </div>
  ));
  return (
    <div className="wide-father">
      <div className="container">
        <h3 className="text-center mb-3 fw-bold pt-3">Why Partner With Us</h3>
        <div className="row">{benfits}</div>
      </div>
    </div>
  );
}
