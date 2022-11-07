import React, { useEffect, useState } from "react";
// import Ticker from "react-ticker";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";

export default function Parteners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/partner/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let Parteners = data.map((item, key) => (
    <div
      key={key}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          width: "150px",
          height: "150px",
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
