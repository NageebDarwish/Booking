import { useEffect, useState } from "react";
import { ReactDOM } from "react";

export default function ModalAr() {
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
      {item.title_ar}
    </option>
  ));
  const cityId = citydata.map((item, index) => (
    <option key={index} value={item.id}>
      {item.title_ar}
    </option>
  ));
  const partners = partnerData.map((item, index) => (
    <div key={index}>
      <h2 onClick={() => setPartner(item.id)} style={{ cursor: "pointer" }}>
        <div
          className="btn btn-primary"
          data-bs-target="#exampleModalToggle4"
          data-bs-toggle="modal"
        >
          {item.name_ar}
        </div>
      </h2>
    </div>
  ));
  const partnerFilter = partnerDetails.filter(
    (item) => item.id === Number(patner)
  );

  const partnerD = partnerFilter.map((item, index) => (
    <div
      key={index}
      className="d-flex align-items-center justify-content-between custom-modal flex-wrap gap-1 "
      dir="rtl"
    >
      <div className="modal-body-inner">
        <h2>{item.name_ar}</h2>
        <h5>{item.describtion_ar}</h5>
        <p>
          البريد الالكتروني:
          <a href={`mailto:${item.email}`} className="email">
            {item.email}
          </a>
        </p>
        <p>
          <i
            className="fa-solid fa-location-dot"
            style={{ paddingRight: "5px", color: "gray" }}
          ></i>
          الموقع: {item.location_ar}
        </p>

        <h5>
          Website:
          <a href={item.website} target="_blank">
            {" "}
            {item.website}
          </a>
        </h5>
      </div>
      <img src={item.logo} alt={"logo"} width="200px" />
    </div>
  ));
  return (
    <div dir="rtl">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between flex-row">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                اختر الدولة
              </h1>
            </div>
            <div className="modal-body">
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="active"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  required
                >
                  <option disabled>Choose Country</option>
                  {countryId}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              {country !== "Choose Country" && (
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  التالي
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                اختر المدينة
              </h1>
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() => setCity("Choose Your City")}
              >
                العودة الى الولايات
              </button>
              {city !== "Choose Your City" && (
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                >
                  التالي
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel3">
                اختر الشريك
              </h1>
            </div>
            <div className="modal-body">{partners}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                العودة الى المدن
              </button>
            </div>
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
                معلومات الشريك
              </h1>
            </div>
            <div className="modal-body">{partnerD}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                onClick={() => setPartner(0)}
              >
                العودة الى الشركاء
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0 ">
        <a
          className="b2b"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          حجز
        </a>
      </div>
    </div>
  );
}
