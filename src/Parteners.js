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

  let Parteners = data.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        width: "200px",
        justifyContent: "center",
        paddingTop: "10px",
        marginRight: "10px",
        flexDirection: "column",
      }}
    >
      <div
        className="mb-3"
        style={{
          backgroundImage: `url(${item.logo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "150px",
          height: "150px",
        }}
      ></div>

      <h1
        className=".fw-bold"
        style={{
          fontSize: "18px",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        {item.name_en}
      </h1>
    </div>
  ));
  return (
    <div className="wide-father">
      <Ticker>{Parteners}</Ticker>
    </div>
  );
}
