import { useEffect, useState } from "react";
import { ReactDOM } from "react";

export default function Modal() {
  const [data, setData] = useState([]);
  const [citydata, setCityData] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [country, setCountry] = useState("Choose Country");
  const [city, setCity] = useState("Choose Your City");
  const [patner, setPartner] = useState(0);
  const [partnerDetails, setPartnerDeatils] = useState([]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/country/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/city-partner/show")
      .then((res) => res.json())
      .then((data) => {
        setCityData(data.filter((item) => item.country_id === Number(country)));
      });
  }, [country]);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/partner/show")
      .then((res) => res.json())
      .then((data) => {
        setPartnerDeatils(data);
        setPartnerData(
          data.filter((item) => item.city_partner_id === Number(city))
        );
      });
  }, [city]);

  const countryId = data.map((item, index) => (
    <option key={index} value={item.id}>
      {item.title_en}
    </option>
  ));
  const cityId = citydata.map((item, index) => (
    <option key={index} value={item.id}>
      {item.title_en}
    </option>
  ));
  const partners = partnerData.map((item, index) => (
    <div key={index}>
      <h2 onClick={() => setPartner(item.id)} style={{ cursor: "pointer" }}>
        <div data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "16px",
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
                color: "black",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              {item.name_en}
            </h1>
          </div>
        </div>
      </h2>
    </div>
  ));
  const partnerFilter = partnerDetails.filter(
    (item) => item.id === Number(patner)
  );
  console.log(patner);

  const partnerD = partnerFilter.map((item, index) => (
    <div
      key={index}
      className="d-flex align-items-center justify-content-between custom-modal flex-wrap gap-1"
    >
      <div className="modal-body-inner">
        <h2>{item.name_en}</h2>
        <h5>{item.describtion_en}</h5>
        <p>
          email:
          <a href={`mailto:${item.email}`} className="email">
            {item.email}
          </a>
        </p>
        <p>
          <i
            className="fa-solid fa-location-dot"
            style={{ paddingRight: "5px", color: "gray" }}
          ></i>
          Location: {item.location_en}
        </p>

        <a
          href={item.website}
          className="b2b btn roundrd-circle main-btn btn-book btn-business pl-2"
          target="_blank"
        >
          Book
        </a>
      </div>
      <img src={item.logo} alt={"logo"} width="200px" />
    </div>
  ));
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Booking
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="active"
                  onChange={(e) => {
                    setPartnerData([]);
                    setCity("Choose Your City");
                    setCountry(e.target.value);
                  }}
                  value={country}
                  required
                >
                  <option disabled>Choose Country</option>
                  {countryId}
                </select>
              </div>
              {country !== "Choose Country" && (
                <div style={{ paddingTop: "20px" }}>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="active"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    required
                  >
                    <option disabled>Choose Your City</option>
                    {cityId}
                  </select>
                </div>
              )}
              <div className="modal-body gap-3 flex-wrap d-flex align-items-center justify-content-center">
                {partners}
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle4"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel4">
                Partner Info
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{partnerD}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() => {
                  setCountry("Choose Country");
                  setPartnerData([]);
                  setPartner(0);
                }}
              >
                Back to Partners
              </button>
            </div>
          </div>
        </div>
      </div>

      <a
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
        id="clickToView"
        style={{ display: "none" }}
      ></a>
    </div>
  );
}
