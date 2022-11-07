import React, { useEffect, useState } from "react";
// import Ticker from "react-ticker";
import Ticker from "nice-react-ticker";

export default function Parteners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/partner/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [theme, setTheme] = useState(true);
  window.addEventListener("storage", () => {
    setTheme((prev) => !prev);
  });

  let Parteners = data.map((item, key) => (
    <div
      key={key}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "16px",
        marginRight: "10px",
      }}
    >
      <div
        className="mb-3"
        style={{
          backgroundImage: `url(${item.logo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100px",
          height: "100px",
        }}
      ></div>

      <h1 style={{ fontSize: "18px", textAlign: "center", paddingTop: "10px" }}>
        {item.name_ar}
      </h1>
    </div>
  ));
  return (
    <div>
      <Ticker>{Parteners}</Ticker>
    </div>
  );
}
