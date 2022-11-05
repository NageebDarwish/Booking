import React from "react";
import "reactjs-popup/dist/index.css";
import "react-image-lightbox/style.css";
import Loading from "./components/Loading";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Services() {
  const [loading, setLoading] = useState(true);
  const [dataDepartment, setdataDepartment] = useState([]);
  const [data, setData] = useState([]);

  function getFileExtension(fileName) {
    var fileExtension;
    fileExtension = fileName.replace(/^.*\./, "");
    return fileExtension;
  }
  function isIMage(fileName) {
    var fileExt = getFileExtension(fileName);
    var imagesExtension = ["mp4"];
    if (imagesExtension.indexOf(fileExt) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/service/show")
      .then((res) => res.json())
      .then((dataRes) => {
        setData(dataRes);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/Department/show")
      .then((res) => res.json())
      .then((dataRes) => setdataDepartment(dataRes));
  }, []);

  const dataDepartmentShow = dataDepartment.map((x, key) => (
    <div key={key}>
      {data.map((item, key) =>
        item.department_id === x.id ? (
          <div key={key}>
            <div
              className="col-md-12"
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="service-card-anim"
              >
                <div
                  className="card mb-3 mt-3 service-card"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: "12px",
                  }}
                >
                  <Link
                    to={`/states/ar/${item.id}`}
                    width="100%"
                    style={{ display: "flex", width: "100%" }}
                  >
                    {isIMage(item.service_video) ? (
                      <video
                        width="900px"
                        autoPlay
                        muted
                        className="service-video"
                      >
                        <source
                          src={`${item.service_video}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <div
                        style={{
                          backgroundImage: ` url(${item.service_video})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          backgroundSize: " cover",
                          height: "15.25rem",
                          position: "relative",
                          borderRadius: "12px",
                        }}
                      ></div>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  ));

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--first-color)",
        }}
      >
        <video autoPlay muted style={{ width: "100%" }} loop>
          <source src={require("./assets/before.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="bg-custom">
        <h1 className="text-center fw-bold mb-4 title-photo-s">الخدمات</h1>
        <div className="container" id="services">
          <div className="row" style={{ position: "relative" }}>
            {loading && <Loading />}
            {dataDepartmentShow}
          </div>
        </div>
      </div>
    </>
  );
}
